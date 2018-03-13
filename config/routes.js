var _ = require('underscore');
//var Index = require('../app/controllers/index');
var User = require('../static/models/user');
var Page = require('../static/models/page');
var Comment = require('../static/models/comment');
var Category = require('../static/models/category');

module.exports = function(app){
  app.get('/page', function(req, res){
    console.log(req.params);
    var type = req.params.type;
  });
};
