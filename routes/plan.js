var DB = require('../DB/dbConnect');
var Lodash = require('lodash');
var dayjs = require('dayjs');

const getPlanList = async (req, res, next) => {
  const { query = {} } = req;
  const { pageNo = 1, pageSize = 10, name } = query;
  // SELECT * FROM students ORDER BY score DESC LIMIT 9,3;
  const sqlStr = `SELECT COUNT(id) FROM plan${name ? ` where name LIKE "%${name}%"` : ''}`;
  console.log(sqlStr, 'sqlStr', name, query);
  const total = await DB(`SELECT COUNT(id) FROM plan${name ? ` where name LIKE "%${name}%"` : ''}`);
  const plans = await DB(`select * from plan${name ? ` where name LIKE "%${name}%"` : ''} ORDER BY id DESC LIMIT ${pageSize * (pageNo - 1)},${pageSize}`);
  res.json({
    status: 200,
    result: {
      data: plans,
      total: total[0]['COUNT(id)']
    },
  });
};

const checkNameRepeat = async (name, id) => {
  const plan = await DB(`select * from plan where name='${name}'${id ? `and id != ${id}`: ''}`);
  console.log(plan, 'plan');
  return plan;
}

const addPlan = async (req, res, next) => {
  let params = req.body;
  const repeat = await checkNameRepeat(params.name);
  if (repeat?.length) {
    console.log(repeat, 'repeat');
    res.status(400);
    res.json({ result: true, success: false, message: '计划名称已存在' });    
    return;
  }
  const keys = Object.keys(Lodash.omit(params, ['PlanTimeList']) );
  const result = await DB(`insert into plan(${keys.join()}) values (${keys.map(key => typeof params[key] === 'number' ? params[key] : "'" + params[key] + "'").join()})`);
  console.log(result, 'resultinsert');
  if (result) {
    // await updatePlanTime(params.eventTimeList, result.insertId);
    res.json({ result: true, success: true });
    return;
  }
  return res.status(400).json({
    result: false,
    success: false,
    message: '添加失败'
  })
};

const editPlan = async (req, res, next) => {
  let params = req.body;
  const repeat = await checkNameRepeat(params.name, params.id);
  if (repeat?.length) {
    console.log(repeat, 'repeat');
    res.status(400);
    res.json({ result: true, success: false, message: '事项名称已存在' });
    return;
  }
  const keys = Object.keys(Lodash.omit(params, ['eventTimeList']) );
  const events = await DB(`update plan set ${keys.map(key => `${key}=${typeof params[key] === 'number' ? params[key] : "'" + params[key] + "'"}`).join()} where id=${params.id}`);
  console.log(events, keys, 'editPlan', repeat);
  if (events) {
    // await updatePlanTime(params.eventTimeList, params.id);
    res.json({ 
      status: 200,
      result: true,
      success: true
    });
    return;
  }
  res.status(400).json({ success: false, message: '编辑失败' });
};

const deletePlan = async (req, res, next) => {
  let params = req.body;
  const result = await DB(`delete from event where id=${params.id}`);
  if (result) {
    res.json({ result: true, success: true });
    return;
  }
};

const getPlanDetailById = async (req, res) => {
  const { query = {} } = req;
  console.log(res, query, 'getPlanDetailById');
  const events = await DB(`select * from plan where id=${query.id}`);
  if (events?.length) {
    const event = events[0];
    // event.eventTimeList = await DB(`select * from eventTime where belongToPlan=${query.id}`);
    res.json({ 
      status: 200,
      result: {
        ...event,
        publishedEnv: JSON.parse(event.publishedEnv || '[]'),
      },
      success: true
    });
    return;
  }
}

module.exports = {
  getPlanList,
  addPlan,
  editPlan,
  deletePlan,
  getPlanDetailById,
};
