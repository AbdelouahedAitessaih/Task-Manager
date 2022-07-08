const mongoose = require('mongoose');

const taskGroup = new mongoose.Schema({
  title:{
    type:String,
    trim:true,
    minlength:3,
    required:true
  },
  description:{
    type:String,
    trim:true,
    minlength:3,
  }
},{timestamps:true});

const TaskGroup = mongoose.model('TaskGroup', taskGroup);

module.exports = TaskGroup;