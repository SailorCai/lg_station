var _ = require('underscore');
//var Index = require('../app/controllers/index');
var User = require('../static/models/user');
var Page = require('../static/models/page');
var Comment = require('../static/models/comment');
var Category = require('../static/models/category');

module.exports = function(app){
  app.get('/page/list', function(req, res){
    Page
    .find({})
    .populate('category', 'name')
    .sort({'meta.updateAt': -1})
    .exec(function(err, pages){
    	if(err){
    		console.log(pages);
    	}else{
		    console.log(pages[0].meta.updateAt.getFullYear());
    		res.send(pages);
    	};
    });
    //res.writeHeader(200, {'content-Type':'text/plain'});
  });

  app.get('/page/:id', function(req, res){
  	var id = req.params.id;
  	console.log(id);
  	Page.findById(id,function(err, page){
  		if(err){
  			console.log(err);
  			res.send(err);
  		}else{
  			res.render('pageDetail', {
  				title: '文章阅读',
  				page: page
  			});
  		}
  	});
  });

  app.post('/page/save', function(req, res){
  	//console.log(req.body.title);
  	var id = req.body._id;
  	var pageObj = req.body;
    var _page;
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
      _page = new Page(pageObj);
      var categoryId = pageObj.category;
      var categoryName = pageObj.categoryName;
      _page.save(function(err, page){
        if(err){
          console.log(err);
          console.log(11111);
        };
        if(categoryId){
          Category.findById(categoryId, function(err, category){
            category.pages.push(_page);
            category.save(function(err, category){
              //res.redirect('/page/'+page._id);
            });
          });
        }else if(categoryName){
          var _category = new Category({
            name: categoryName,
            pages: [page._id]
          });
          _category.save(function(err, category){
          	if(err){
          		console.log(err);
          	};
            page.category = category._id;
            page.save(function(err, page){
              if(err){
                console.log(err);
              };
              res.send(page);
              //res.redirect('/page/'+page._id);
            });
          });
        };
      });
  	};
  	//var _di = req.body.movie.id;
  });

  // 获取分类
  app.get('/category/all', function(req, res){
    Category.fetch(function(err, categorys){
      if(err){
        console.log(err);
      }
      res.send(categorys);
    });
  });

};
