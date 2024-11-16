var express = require('express');
var DB = require('../../DB/dbConnect');
// var { getTokenInfo } = require('../utils/token')
var createError = require('http-errors');
var Lodash = require('lodash');
var dayjs = require('dayjs');
const { createRes, createRes400 } = require('../../utils/response');
const { getTokenInfo } = require('../../utils/token');

const dateTimeFormat = 'YYYY-MM-DD HH:mm:ss';

const tableName = 'algorithm';

const getAlgorithmList = async (req, res, next) => {
  const { query = {} } = req;
  const { pageNo = 1, pageSize = 10 } = query;
  // SELECT * FROM students ORDER BY score DESC LIMIT 9,3;
  const total = await DB(`SELECT COUNT(id) FROM ${tableName}`);
  const events = await DB(`select * from ${tableName} ORDER BY id DESC LIMIT ${pageSize * (pageNo - 1)},${pageSize}`);
  res.json({
    status: 200,
    result: {
      data: events,
      total: total[0]['COUNT(id)']
    },
  });
};


const addAlgorithm = async (req, res, next) => {
  let params = req.body;
  const keys = Object.keys(Lodash.omit(params, ['type', 'mark']) );
  const result = await DB(`insert into ${tableName}(${keys.join()}) values (${keys.map(key => typeof params[key] === 'number' ? params[key] : "'" + params[key] + "'").join()})`);
  console.log(result, 'resultinsert');
  if (result) {
    res.json({ result: true, success: true });
    return;
  }
  res.status(400).json({
    success: false,
    result: false,
    message: '添加失败'
  })
};

const editAlgorithm = async (req, res, next) => {
  let params = req.body;
  const keys = Object.keys(Lodash.omit(params, ['eventTimeList']) );
  const events = await DB(`update ${tableName} set ${keys.map(key => `${key}=${typeof params[key] === 'number' ? params[key] : "'" + params[key] + "'"}`).join()} where id=${params.id}`);
  if (events) {
    res.json({ 
      status: 200,
      result: true,
      success: true
    });
    return;
  }
  res.status(400).json({ success: false, message: '编辑失败' });
};

const deleteAlgorithm = async (req, res, next) => {
  let params = req.body;
  const executeFun = async (CDB) => {
    const result = await CDB.query(`delete from ${tableName} where id=${params.id}`);
    console.log(result, 'deleteEvent');
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

const getAlgorithmDetailById = async (req, res) => {
  const { query = {} } = req;
  const events = await DB(`select * from ${tableName} where id=${query.id}`);
  if (events?.length) {
    res.json({ 
      status: 200,
      result: algorithms,
      success: true
    });
    return;
  }
  res.status(400).json({ success: false, message: '操作失败' });
}

module.exports = {
  getAlgorithmList,
  addAlgorithm,
  editAlgorithm,
  deleteAlgorithm,
  getAlgorithmDetailById,
};
