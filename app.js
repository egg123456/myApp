var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 01：安装并导入 JWT 相关的两个包，分别是 jsonwebtoken 和 express-jwt
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var otherRouter = require('./routes/other');

var app = express();

// // 允许跨域资源共享
// const cors = require('cors')
// app.use(cors());

// 解析 post 表单数据的中间件
const bodyParser = require('body-parser');
const { secretKey } = require('./utils/token');
app.use(bodyParser.urlencoded({ extended: false }))

// 04：注册将 JWT 字符串解析还原成 JSON 对象的中间件
// 注意：只要配置成功了 express-jwt 这个中间件，就可以把解析出来的用户信息，挂载到 req.user 属性上
// unless指定哪些接口不需要访问权限，即白名单。
app.use(
  expressJWT.expressjwt({ secret: secretKey, algorithms: ["HS256"] }).unless({ 
    path: [
      /^\/users/, 
      /^\/javascripts\/.*/, 
      /^\/stylesheets\//,
      /^\/images\/.*/,
      /^\/builds\//, 
      /^\/build\//,
      /\/view\/.*/,
      /\/test\/.*/, 
      /\/liShuiMobile.*\/.*/,
      /^\/favicon.ico/,
      /^\/h5\/.*/
    ] 
  }))
console.log(expressJWT, 'expressJWTexpressJWT');
app.use(function (err, req, res, next) {
  console.log('UnauthorizedError', err.name, err);
  if (err.name === 'TokenExpiredError') {
    // 处理JWT过期的情况
    return res.status(401).json({ message: 'Token expired' });
  }
  if (err.name === 'UnauthorizedError') {
    res.status(401).render('login', { title: 'login' })
  } else {
    const tokenInfo = req.headers.authorization;
    console.log(req.headers, 'reqreqreqreqreqreqreqreq')
    if (tokenInfo) {
      req.tokenInfo = jwt.verify(tokenInfo, secretKey, { algorithms: ["HS256"] });
      console.log(req.tokenInfo, '123');
    }
  }
})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(/\/view\/.*/, (req, res, next) => {
  res.render('index', { title: 'myWeb' });
});

// app.use(/\/test\/.*/, (req, res, next) => {
//   res.render('test', { title: 'test' });
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/other', otherRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
