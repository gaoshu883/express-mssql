var express = require('express');
var router = express.Router();

var sqlService = require('../service/msSqlService');

// 参数
// 用户id
var paramId = '1';

/* GET users listing. */
// users apis
// 数据直接传递给前端
// router.get('/', function(req, res, next) {
//   sqlService.queryByParam(paramId, function(data) {
//     data && data.length !== 0 ? res.json({"status":1,"data":data}) : res.json({"status":-1,"errmsg":"no eligible data","data":data});
//   });
// });

// 数据渲染到前端页面中
router.get('/', function(req, res, next) {
  sqlService.queryByParam(paramId, function(data) {
    data && data.length !== 0 && res.render('user', {"data": data[0]}) && console.log(data[0]);
  });
});


module.exports = router;

