const jwt = require('jsonwebtoken');

const secretKey = 'egg'

module.exports = {
  getTokenInfo: (req) => {
    let tokenInfo = req.headers.authorization.replace('Bearer ', '');
    if (tokenInfo && tokenInfo !== 'null' ) {
      tokenInfo = jwt.verify(tokenInfo, secretKey, { algorithms: ["HS256"] });
    }
    return tokenInfo || {};
  },
  secretKey,
  expires: 2 * 60 * 60 + 's',
};
