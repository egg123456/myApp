var DB = require('../../DB/dbConnect');
const jwt = require('jsonwebtoken');
const { secretKey, expires } = require('../../utils/token');

const login = async (req, res) => {
  let params = req.body;
  const rows = await DB(`select * from person where phone='${params.phone}'`);
  console.log(rows, 'rows', params);
  if (rows && rows.length) {
    const { password, id, name, phone } = rows[0];
    if (password === params.password) {
      const tokenStr = await jwt.sign({ phone, id, name }, secretKey, { expiresIn: expires })
      res.json({
        status: 200,
        message: '登录成功！',
        token: tokenStr, // 要发送给客户端的 token 字符串
        id, name, phone
      })
    }
    return;
  }
  res.status(400).json({ result: true, success: false, message: '手机号不存在' });
};

module.exports = login;
