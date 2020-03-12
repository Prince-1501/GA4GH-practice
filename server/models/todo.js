var mongoose = require('mongoose');

var phenotypesSchema = new mongoose.Schema({
  text:{
    type:String,
    required : true,
    trim : true,
    minlength : 1
  },
  completed:{
    type:Boolean
  },
  completedAt :{
    type:Number
  }
});

var Phenotypes = mongoose.model('Phenotypes',phenotypesSchema);

module.exports = {Phenotypes};
