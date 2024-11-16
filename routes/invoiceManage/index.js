var express = require('express');
var DB = require('../../DB/dbConnect');
// var { getTokenInfo } = require('../utils/token')
var createError = require('http-errors');
var Lodash = require('lodash');
var dayjs = require('dayjs');
const { createRes, createRes400 } = require('../../utils/response');
const { getTokenInfo } = require('../../utils/token');

const dateTimeFormat = 'YYYY-MM-DD HH:mm:ss';

const tableName = 'invoiceInfo';

const getInvoiceInfoList = async (req, res, next) => {
  const { query = {} } = req;
  const { pageNo = 1, pageSize = 10 } = query;
  // SELECT * FROM students ORDER BY score DESC LIMIT 9,3;
  const total = await DB(`SELECT COUNT(id) FROM ${tableName}`);
  const events = await DB(`select * from ${tableName} ORDER BY id DESC LIMIT ${pageSize * (pageNo - 1)},${pageSize}`);
  res.json({
    status: 200,
    result: {
      data: events?.map(row => {
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
      total: total?.[0]?.['COUNT(id)']
    },
  });
};

const checkFieldValRepeat = async (fieldName, fieldVal) => {
  const events = await DB(`select * from ${tableName} where ${fieldName}='${fieldVal}'`);
  console.log(events, 'events');
  return events;
}

const addInvoiceInfo = async (req, res, next) => {
  let params = req.body;
  const repeat = await checkFieldValRepeat('num', params.num);
  if (repeat.length) {
    console.log(repeat, 'repeat');
    res.status(400);
    res.json({ result: true, success: false, message: '已存在' });    
    return;
  }
  const keys = Object.keys(params);
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

const editInvoiceInfo = async (req, res, next) => {
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

const deleteInvoiceInfo = async (req, res, next) => {
  let params = req.body;
  const result = await DB(`delete from ${tableName} where id=${params.id}`);
  if (result) {
    res.json({ result: true, success: true });
    return;
  }
  res.status(400).json({ success: false, message: '删除失败' });
};

const getInvoiceInfoDetailById = async (req, res) => {
  const { query = {} } = req;
  const events = await DB(`select * from ${tableName} where id=${query.id}`);
  if (events?.length) {
    res.json({ 
      status: 200,
      result: InvoiceInfos,
      success: true
    });
    return;
  }
  res.status(400).json({ success: false, message: '操作失败' });
}

module.exports = {
  getInvoiceInfoList,
  addInvoiceInfo,
  editInvoiceInfo,
  deleteInvoiceInfo,
  getInvoiceInfoDetailById,
};
