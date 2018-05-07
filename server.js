var express = require('express');
var path  = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);
var multipart = require('connect-multiparty');
var fs = require('fs');
var env = process.env.NODE_ENV || 'development';

var app = express();
var dbUrl = 'mongodb://logan_runner:H**k9001$@127.0.0.1:29999/lgData';

if(env === 'development'){
  dbUrl = 'mongodb://localhost/lgData';
};

mongoose.connect(dbUrl, {
  //useMongoClient:true
});

//models loading
var models_path = __dirname + '/static/models';
var walk = function(path) {
  fs
    .readdirSync(path)
    .forEach(function(file){
      var newPath = path + '/' + file;
      var stat = fs.statSync(newPath);

      if(stat.isFile()){
        if(/(.*)\.(js|coffee)/.test(file)){
          require(newPath);
        };
      }else if(stat.isDirectory()){
        walk(newPath);
      };
    })
};

walk(models_path);

app.locals.moment = require('moment');
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());
//上传图片时可能需要使用的中间件
app.use(multipart());
app.use(session({
  resave: false,  
  saveUninitialized: true,
  secret: 'logan',
  store: new mongoStore({
    url: dbUrl, 
    collection: 'sessions'
  })
}));

if('development' === app.get('evn')){  //如果当前evn是开发环境
  app.set('showStackError', true);  //把错误信息打印出来
  app.use(express.logger(':method :url :status'));  //logger中间件
  app.locals.pretty = true; //后台输出格式化后的源码
  mongoose.set('debug', true);  //打开mongoose的debug开关
};

app.set('views', './static/html');
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.redirect('/index.shtml');
  //res.send('hello world');
});

require('./config/routes')(app);

var server = app.listen(3002, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('应用实例，访问地址为http://%s%s', host, port);
});
app.use(express.static(path.join(__dirname, 'dist')));