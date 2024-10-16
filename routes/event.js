var express = require('express');
var router = express.Router();
var DB = require('../DB/dbConnect');
// var { getTokenInfo } = require('../utils/token')
var createError = require('http-errors');
var Lodash = require('lodash');
var dayjs = require('dayjs');
const { createRes, createRes400 } = require('../utils/response');
const { getTokenInfo } = require('../utils/token');

const dateTimeFormat = 'YYYY-MM-DD HH:mm:ss';

const getEventList = async (req, res, next) => {
  const { query = {} } = req;
  const { pageNo = 1, pageSize = 10 } = query;
  // SELECT * FROM students ORDER BY score DESC LIMIT 9,3;
  const total = await DB(`SELECT COUNT(id) FROM event`);
  const events = await DB(`select * from event ORDER BY id DESC LIMIT ${pageSize * (pageNo - 1)},${pageSize}`);
  res.json({
    status: 200,
    result: {
      data: events.map(row => {
        // 去除sql查出的空值null
        const obj = Lodash.omitBy(row, el => el === null);
        // 格式化时间
        Object.keys(obj).forEach(key => { 
          if (['submitTest', 'publishTime'].includes(key)) {
            obj[key] = dayjs(obj[key]).format('YYYY-MM-DD HH:mm:ss');
            // obj[key] = dayjs(obj[key]).valueOf();
          }
        })
        return obj;
      }),
      total: total[0]['COUNT(id)']
    },
  });
};

const checkNameRepeat = async (name, id) => {
  const events = await DB(`select * from event where name='${name}'${id ? `and id != ${id}`: ''}`);
  console.log(events, 'events');
  return events;
}

/**
 * @description: 更新任务排期
 * @param {*} list
 * @param {*} id
 * @return {*}
 */
const updateEventTime = async (list = [], id) => {
  if (list.length === 0) return;
  list.forEach(item => { item.belongToEvent = id })
  const keys = Object.keys(list[0])
  // delete from <tableName> where name = 'egg'
  if (id) {
    const events = await DB(`delete from eventTime where belongToEvent='${id}'`);
  }
  console.log(keys, list, 'updateEventTimeupdateEventTimeupdateEventTime')
  list.forEach(async (params) => {
    const values = keys.map(key => typeof params[key] === 'number' ? params[key] : "'" + params[key] + "'").join();
    const result = await DB(`insert into eventTime(${keys.join()}) values (${values})`);
  })
}

const addEvent = async (req, res, next) => {
  let params = req.body;
  const repeat = await checkNameRepeat(params.name);
  if (repeat.length) {
    console.log(repeat, 'repeat');
    res.status(400);
    res.json({ result: true, success: false, message: '事项名称已存在' });    
    return;
  }
  const keys = Object.keys(Lodash.omit(params, ['eventTimeList']) );
  const result = await DB(`insert into event(${keys.join()}) values (${keys.map(key => typeof params[key] === 'number' ? params[key] : "'" + params[key] + "'").join()})`);
  console.log(result, 'resultinsert');
  if (result) {
    await updateEventTime(params.eventTimeList, result.insertId);
    res.json({ result: true, success: true });
    return;
  }
  res.status(400).json({
    success: false,
    result: false,
    message: '添加失败'
  })
};

const editEvent = async (req, res, next) => {
  let params = req.body;
  const repeat = await checkNameRepeat(params.name, params.id);
  if (repeat?.length) {
    res.status(400);
    res.json({ result: true, success: false, message: '事项名称已存在' });
    return;
  }
  const keys = Object.keys(Lodash.omit(params, ['eventTimeList']) );
  const events = await DB(`update event set ${keys.map(key => `${key}=${typeof params[key] === 'number' ? params[key] : "'" + params[key] + "'"}`).join()} where id=${params.id}`);
  if (events) {
    await updateEventTime(params.eventTimeList, params.id);
    res.json({ 
      status: 200,
      result: true,
      success: true
    });
    return;
  }
  res.status(400).json({ success: false, message: '编辑失败' });
};

const deleteEvent = async (req, res, next) => {
  let params = req.body;
  const executeFun = async (CDB) => {
    const result = await CDB.query(`delete from event where id=${params.id}`);
    console.log(result, 'deleteEvent');
    const events = await CDB.query(`delete from eventTime where belongToEvent='${params.id}'`);
    // 提交事务
    const ans = CDB.commit();
    if (ans) {
      return ans;  
    }
    // 回滚事务
    return CDB.rollback(function() {
      throw new Error('rollback');
    });
  }
  const result = await DB.transaction(executeFun)
  if (result) {
    res.json({ result: true, success: true });
    return;
  }
};

const getEventDetailById = async (req, res) => {
  const { query = {} } = req;
  console.log(res, query, 'getEventDetailById');
  const events = await DB(`select * from event where id=${query.id}`);
  if (events?.length) {
    const event = events[0];
    event.eventTimeList = await DB(`select * from eventTime where belongToEvent=${query.id}`);
    if (event.belongToVersion) {
      const plan = await DB(`select * from plan where id=${event.belongToVersion}`);
      console.log(plan, 'plan', plan?.[0]?.name);
      const name = plan?.[0]?.name;
      event.belongToVersion = name ? { value: event.belongToVersion, label: name } : undefined;
    }
    res.json({ 
      status: 200,
      result: event,
      success: true
    });
    return;
  }
}

const getEventTimeList = async (req, res, next) => {
  // const { query = {} } = req;
  let query = req.body;
  const { name = '' } = getTokenInfo(req);
  const { month, members } = query;
  const names = members?.length ? members : [name];
  let beginTime = dayjs().startOf('M').valueOf();
  let endTime = dayjs().endOf('M').valueOf()
  if (month) {
    beginTime = dayjs(month).startOf('M').valueOf();
    endTime = dayjs(month).endOf('M').valueOf();
  }
  let allEventTimes = []
  for (let j = 0; j < names.length; j++) {
    const userName = names[j];

  const eventTimes = await DB(`select * from eventTime where 
  ((unix_timestamp(beginTime)>='${beginTime / 1000}' and unix_timestamp(beginTime)<='${endTime / 1000}') or 
  (unix_timestamp(endTime)>='${beginTime / 1000}' and unix_timestamp(endTime)<='${endTime / 1000}')) and implementor='${userName}'`);
  console.log(eventTimes, 'getEventTimeList-eventTime', getTokenInfo(req), userName);
  const belongToIds = [];
  eventTimes.forEach((obj) => {
    const { belongToEvent } = obj;  
    if (belongToIds.includes(belongToEvent)) return;
    belongToIds.push(belongToEvent);
  });
  console.log(belongToIds, 'belongToIds', userName)
  const events = [];
  for (let i = 0; i < belongToIds.length; i++) {
    // const event = (await DB(`select * from event where id=${belongToIds[i]}`))[0];
    const event = (await DB(`select plan.name as planName, event.* from plan right join event on event.belongToVersion=plan.id where event.id=${belongToIds[i]};`))[0];
    console.log(event, 'getEventTimeListgetEventTimeListgetEventTimeListgetEventTimeList');
    if (!event) continue;
    event.eventTimeList = eventTimes.filter(({ belongToEvent }) => belongToEvent === event.id).map(el => ({ ...el, name: event.name, link: event.link }));
    events.push(event);
  }
  allEventTimes = allEventTimes.concat(events);
  }
  // const events = belongToIds.map(async (id) => {
  //   const event = await DB(`select * from event where id=${id}`);
  //   event.eventTimeList = eventTimes.filter(({ belongToEvent }) => belongToEvent === event.id);
  //   return event;
  // });
  res.json({
    success: true,
    result: {
      data: allEventTimes
    }
  })
  return;
};

module.exports = {
  getEventList,
  addEvent,
  editEvent,
  deleteEvent,
  getEventDetailById,
  getEventTimeList,
};
