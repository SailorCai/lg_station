var _ = require('underscore');
//var Index = require('../app/controllers/index');
var User = require('../static/models/user');
var Page = require('../static/models/page');
var Comment = require('../static/models/comment');
var Category = require('../static/models/category');

module.exports = function(app){
  app.get('/page/list', function(req, res){
    Page.fetch(function(err, pages){
    	if(err){
    		console.log(pages);
    	}else{
		    console.log(pages);
    		res.send(pages);
    	};
    });
    //res.writeHeader(200, {'content-Type':'text/plain'});
  });
  app.post('/page/save', function(req, res){
  	console.log(req.body.title);
  	var id = req.body._id;
  	var pageObj = req.body;
  	if(id){
  		Page.findById(id, function(err, page){
  			if(err){
  				console.log(err);
  				res.send(err);
  			}else{
  				_page = _.extend(page, pageObj);
  				_page.save(function(err, page){
  					if(err){
  						console.log(err);
  					};
  					console.log(page);
  				});
  			};
  		});
  	}else{
  		
  	};

  	//var _di = req.body.movie.id;
  });
};
