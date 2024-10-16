var express = require('express');
var router = express.Router();
var DB = require('../DB/dbConnect');
var { getTokenInfo } = require('../utils/token')
var createError = require('http-errors');
const multer = require('multer');
const { getEventList, editEvent, addEvent, getEventTimeList, deleteEvent, getEventDetailById } = require('./event');
const { getPlanList, editPlan, addPlan, getPlanTimeList, deletePlan, getPlanDetailById } = require('./plan');
const { getCeremonyBooks, getCeremonyBookDetail, getCeremonyRecord, addCeremonyBook, editCeremonyBook, deleteCeremonyBook } = require('./ceremonyManage/index');
const { addCeremonyRecord, editCeremonyRecord, deleteCeremonyRecord, getCeremonyRecordDetail } = require('./ceremonyManage/ceremonyRecord');
const OCR = require('./OCR');
const { getFestivalInfoList, editFestivalInfo, addFestivalInfo, deleteFestivalInfo, getFestivalInfoDetailById } = require('./festivalInfoManage');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'myWeb' });
});

/* GET home page. */
router.get('/api/getApps', async (req, res, next) => {
  const rows = await DB(`select * from func`);
  res.json({
    status: 200,
    result: rows, 
  });
});

/** ceremony Manage */
router.get('/api/getCeremonyRecord', getCeremonyRecord);
router.get('/api/getCeremonyBooks', getCeremonyBooks);
router.get('/api/getCeremonyBookDetail', getCeremonyBookDetail);
router.post('/api/addCeremonyBook', addCeremonyBook);
router.post('/api/editCeremonyBook', editCeremonyBook);
router.post('/api/deleteCeremonyBook', deleteCeremonyBook);
/** ceremony record */
router.get('/api/getCeremonyRecordDetail', getCeremonyRecordDetail);
router.post('/api/addCeremonyRecord', addCeremonyRecord);
router.post('/api/editCeremonyRecord', editCeremonyRecord);
router.post('/api/deleteCeremonyRecord', deleteCeremonyRecord);

/** event Manage */
router.get('/api/event/getEventList', getEventList);
router.post('/api/event/editEvent', editEvent);
router.post('/api/event/addEvent', addEvent);
router.post('/api/event/deleteEvent', deleteEvent);
router.get('/api/event/eventDetailById', getEventDetailById);
router.post('/api/event/getEventTimeList', getEventTimeList);

/** plan Manage */
router.get('/api/event/getPlanList', getPlanList);
router.post('/api/event/editPlan', editPlan);
router.post('/api/event/addPlan', addPlan);
router.post('/api/event/deletePlan', deletePlan);
router.get('/api/event/planDetailById', getPlanDetailById);
// router.get('/api/event/getPlanTimeList', getPlanTimeList);


// festival manage
router.get('/api/festivalInfo/getList', getFestivalInfoList);
router.post('/api/festivalInfo/edit', editFestivalInfo);
router.post('/api/festivalInfo/add', addFestivalInfo);
router.post('/api/festivalInfo/delete', deleteFestivalInfo);
router.get('/api/festivalInfo/detailById', getFestivalInfoDetailById);


router.post('/build/api/upload', multer({
  dest: 'upload'
}).single('file'), async (req, res) => {
  const { isOCR } = req.body;
  // 获取文件基本信息
  console.log(req.file, 'upload');
  if (isOCR) {
    req.file.ocrText = await OCR(`../${req.file.path}`);
    res.send(req.file);
    return;
  }
  res.send(req.file);
});

module.exports = router;
