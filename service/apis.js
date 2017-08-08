var express = require('express');
var app = express();

var sqlService = require('./msSqlService');

// 数据接口
module.exports = {
    // 根据用户id获取用户信息
    userinfo_handler: function(req, res, next) {
        var param = req.query.id;
        sqlService.queryByParam(param, function(data) {
            if (data && data.length !== 0) {
                res.json({ "status": 1, "data": data });
            } else {
                res.json({ "status": -1, "errmsg": "no eligible data", "data": data });
            }
        });
    }
};