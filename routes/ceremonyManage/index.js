const { getTokenInfo } = require('../../utils/token');
var DB = require('../../DB/dbConnect');
var Lodash = require('lodash');

const getCeremonyBooks = async (req, res, next) => {
  const tokenInfo = getTokenInfo(req);
  const books = await DB(`select * from ceremonyBooks where belongTo=${tokenInfo.phone}`);
  res.json({
    status: 200,
    result: books, 
  });
}

const getCeremonyBookDetail = async (req, res, next) => {
  const tokenInfo = getTokenInfo(req);
  const books = await DB(`select * from ceremonyBooks where id=${req.query.id}`);
  if (books.length === 0) {
    createError(400, '无权限操作');
    return;
  }
  const bk = books.map(item => `belongTo=${item.id}`).join(' or ');
  const rows = await DB(`select * from ceremonyRecords where ${bk}`);
  console.log(books, bk, rows, 'rows');
  res.json({
    status: 200,
    result: {
      ...books[0],
      records: rows,
    }
  });
}

const getCeremonyRecord = async (req, res, next) => {
  const tokenInfo = getTokenInfo(req);
  const books = await DB(`select id from ceremonyBooks where belongTo="%${tokenInfo.phone}%"`);
  const bk = books.map(item => `belongTo=${item.id}`).join(' or ');
  const rows = await DB(`select * from ceremonyRecord where ${bk}`);
  console.log(books, bk, rows, 'rows');
  res.json({
    status: 200,
    result: rows, 
  });
}

const checkNameRepeat = async (name, id) => {
  const events = await DB(`select * from ceremonyBooks where name='${name}'${id ? `and id != ${id}`: ''}`);
  return events;
}

const addCeremonyBook = async (req, res, next) => {
  let params = req.body;
  const repeat = await checkNameRepeat(params.name);
  if (repeat?.length) {
    console.log(repeat, 'repeat');
    res.status(400);
    res.json({ result: true, success: false, message: '事项名称已存在' });    
    return;
  }
  const keys = Object.keys(Lodash.omit(params, ['eventTimeList']) );
  const result = await DB(`insert into ceremonyBooks(${keys.join()}) values (${keys.map(key => typeof params[key] === 'number' ? params[key] : "'" + params[key] + "'").join()})`);
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

const editCeremonyBook = async (req, res, next) => {
  let params = req.body;
  const keys = Object.keys(Lodash.omit(params, ['records']) );
  const result = await DB(`update ceremonyBooks set ${keys.map(key => `${key}=${typeof params[key] === 'number' ? params[key] : "'" + params[key] + "'"}`).join()} where id=${params.id}`);
  if (result) {
    res.json({
      success: true,
      result: result, 
    });
    return;
  }
  res.status(400).json({ success: false, message: '编辑失败' });
}

const deleteCeremonyBook = async (req, res, next) => {
  let params = req.body;
  const executeFun = async (CDB) => {
    const result = await CDB.query(`delete from ceremonyBooks where id=${params.id}`);
    console.log(result, 'deleteEvent');
    const events = await CDB.query(`delete from ceremonyRecord; where belongTo='${params.id}'`);
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

module.exports = {
  getCeremonyBooks,
  getCeremonyBookDetail,
  getCeremonyRecord,
  addCeremonyBook,
  editCeremonyBook,
  deleteCeremonyBook,
}