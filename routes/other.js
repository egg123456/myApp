var express = require('express');
var router = express.Router();
var DB = require('../DB/dbConnect');
var register = require('./userManage/register');
var login = require('./userManage/login')

router.get('/result', function(req, res, next) {
  res.send({ result: true, success: true });
});

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.user, 'useruseruser');
  DB('SELECT * FROM ceremony', (err, rows, fields) => {
    if (err) throw err;
    res.json({ title: 'other', rows });
  })
});

// router.post('/reg', (req, res) => {
//   return res.json({ result: 123, success: true });
// })
router.post('/reg', register)

router.post('/login', login)

module.exports = router;
