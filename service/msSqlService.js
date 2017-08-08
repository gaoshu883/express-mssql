var sql = require('mssql');

// config for your database
var config = {
    "user": 'sa',
    "password": 'gaoshu883',
    "server": 'PC-20170428WANV',
    "database": 'gaoshu883',
    "port": '52003',
    "dialect": "mssql",
    "dialectOptions": {
        "instanceName": "DQ"
    }
};

module.exports = {
  queryAll: function(callback) {
    sql.connect(config).then(() => {
        return sql.query `select * from userinfo`
    }).then(result => {
        var data = result.recordset;
        // 数据成功返回后，回调
        callback && callback(data);
        sql.close();
    }).catch(err => {
        // ... error checks
        console.log(err);
        sql.close();
    });

    sql.on('error', err => {
        // ... error handler
        // 这里是必须的，因为如果不处理这里的错误会导致应用崩溃
        console.log(err);
    });
  },
  // 这个例子太片面了
  // 只是查询id 不能处理多参数
  queryByParam: function(param, callback) {
    sql.connect(config).then(() => {
        return sql.query `select * from userinfo where id = ${param}`
    }).then(result => {
        var data = result.recordset;
        // 数据成功返回后，回调
        callback && callback(data);
        sql.close();
    }).catch(err => {
        // ... error checks
        console.log(err);
        sql.close();
    });

    sql.on('error', err => {
        // ... error handler
        // 这里是必须的，因为如果不处理这里的错误会导致应用崩溃
        console.log(err);
    });
  }
}
