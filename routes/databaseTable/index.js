var DB = require('../../DB/dbConnect');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../../utils/token');

const createDatabaseTable = async (req, res) => {
  let { tableName, fields } = req.body;

  const str = `CREATE TABLE ${tableName}(${fields.map(item => {
    
    const { name, dataType, dataLength, notNull, AUTO_INCREMENT, defaultValue, other } = item;

    const type = ` ${dataType}${dataLength ? `(${dataLength})` : ''}`;

    const isNull =  notNull ? ' not null' : '';

    const isAutoIncrement = AUTO_INCREMENT ? ' AUTO_INCREMENT' : '';

    const defaultV = defaultValue ? ` default ${defaultValue}` : '';

    return `${name}${type}${isNull}${isAutoIncrement}${defaultV}${other || ''}`

  })})`;
  
  const okPacket = await DB(str);

  if (!okPacket) {
    res.status(400).json({ result: true, success: false, message: '添加失败' });
    return;
  }

  console.log(str, 'createDatabaseTable', okPacket);

  res.json({
    status: 200,
    message: str,
  })
};

const deleteDatabaseTable = async (req, res) => {
  let { tableName } = req.body;

  const okPacket = await DB(`drop table ${tableName}`);

  if (!okPacket) {
    res.status(400).json({ result: true, success: false, message: '删除失败' });
    return;
  }

  res.json({
    status: 200,
    message: '操作成功',
  });

}

module.exports = {
  createDatabaseTable,
  deleteDatabaseTable,
};
