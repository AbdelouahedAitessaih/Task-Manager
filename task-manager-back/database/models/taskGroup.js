const mongoose = require('mongoose');

const taskGroup = new mongoose.Schema({
  title:{
    type:String,
    trim:true,
    required:true
  },
  description:{
    type:String,
    trim:true,
  }
},{timestamps:true});

const TaskGroup = mongoose.model('TaskGroup', taskGroup);

module.exports = TaskGroup;