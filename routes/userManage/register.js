var DB = require('../../DB/dbConnect');

const register = async (req, res) => {
  let params = req.body;
  const rows = await DB(`select * from person where name='${params.name}' or phone='${params.phone}'`);
  console.log(rows, 'rows');
  if (rows && rows.length) {
    res.status(400).json({ result: '', message: '用户已存在！', success: false })
    return;
  }
  const result = await DB(`insert into person(name,password,phone) values ('${params.name}', '${params.password}', '${params.phone}')`);
  if (result) {
    res.json({ result: true, success: true });
    return;
  }
  res.status(400).json({ result: true, success: false, message: 'err' });
};

module.exports = register;
