var mongoose = require('mongoose');

var PageSchema = require('../schemas/page');
var Page = mongoose.model('Movie', PageSchema);

module.exports = Page;