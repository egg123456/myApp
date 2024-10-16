var express = require('express');
var router = express.Router();
var DB = require('../DB/dbConnect');
var register = require('./userManage/register');
var login = require('./userManage/login');
const { getTokenInfo } = require('../utils/token');

router.get('/result', function(req, res, next) {
  res.send({ result: true, success: true });
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  DB('SELECT * FROM ceremony', (err, rows, fields) => {
    if (err) throw err;
    // console.log('The solution is: ', rows)
    // res.send('respond with a resource sssss');
    res.render('user', { title: 'myWeb', rows });
  })
});

// router.post('/reg', (req, res) => {
//   return res.json({ result: 123, success: true });
// })
router.post('/reg', register)

router.post('/login', login)

router.post('/info', async (req, res, next) => {
  res.json(getTokenInfo(req));
})

module.exports = router;
