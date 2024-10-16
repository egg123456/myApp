const mysql = require('mysql')
var $conf = require('./dbConfig');
const { dealSqlData } = require('../utils/sqlData');

var pool  = mysql.createPool($conf.mysql);

let DB = function( sql, values ) {
  // 返回一个 Promise
  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {

          if ( err ) {
            reject( err )
          } else {
            resolve(dealSqlData(rows))
          }
          // 结束会话
          connection.release()
        })
      }
    })
  }).catch(err => {
    console.log(err);
  })
}

DB.transaction = function(executeFun) {
  // 返回一个 Promise
  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject( err )
      } else {
        connection.beginTransaction(async (err) => {
          if (err) reject(err);
          const data = await executeFun(connection);
          resolve(data);
        })
      }
    })
  }).catch(err => {
    console.log(err);
  })
}


module.exports = DB;