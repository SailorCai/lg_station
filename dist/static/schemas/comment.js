var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var commentSchema = new Schema({
  page: {
    type: ObjectId,
    ref: 'Page',
  },
  from: {
    type: ObjectId,
    ref: 'User',
  },
  reply: [{
    from: {type: ObjectId, ref: 'User'},
    to: {type: ObjectId, ref: 'User'},
    content: String
  }],
  content: String,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
});

// 为模式添加方法
commentSchema.pre('save', function(next){
  if(this.isNew){
    this.meta.createAt = this.meta.updateAt = Date.now();
  }else{
    this.meta.updateAt = Date.now();
  };
  next();
});

// 给模式添加静态方法
commentSchema.statics = {
  fetch: function(cb){
    return this
      .find({})
      .sort('meta.updateAt')
      .exec(cb)
  },
  findById: function(id, cb){
    return this
      .findOne({_id: id})
      .exec(cb)
  }
};

module.exports = commentSchema;
