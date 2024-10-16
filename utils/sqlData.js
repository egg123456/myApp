var Lodash = require('lodash');
var dayjs = require('dayjs');

module.exports = {
  dealSqlData: (records = []) => {
    if (Array.isArray(records)) {
      return records.map(row => {
        // 去除sql查出的空值null
        const obj = Lodash.omitBy(row, el => el === null);
        // 格式化时间
        Object.keys(obj).forEach(key => {
          if (typeof obj[key] === 'object' && / GMT\+\d{4} /.test(obj[key].toString())) {
            obj[key] = dayjs(obj[key]).format('YYYY-MM-DD HH:mm:ss');
            // obj[key] = dayjs(obj[key]).valueOf();
          }
        })
        return obj;
      })
    }
    return records;
  }
}
