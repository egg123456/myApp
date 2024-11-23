module.exports = {
  mysql: {
      host: process.env.MYSQL_HOST || 'localhost',
      user: 'root',
      password: process.env.MYSQL_ROOT_PASSWORD || 'qwer1234',
      database: 'egg', // 前面建的user表位于这个数据库中 
      port: 3306
  }
};
