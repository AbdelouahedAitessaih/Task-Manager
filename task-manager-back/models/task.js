const mongoose = require('mongoose');

const task = new mongoose.Schema({
  title:{
    type:String,
    trim:true,
    required:true
  },
  description:{
    type:String,
    trim:true,
  },
  estimation:{
    type: Number,
    validate : {
        validator : Number.isInteger,
        message   : '{VALUE} is not an integer value'
    }
  },
  statut:{
    type:String,
    enum: ['TODO','DOING','DONE'],
    default:'TODO',
  },
  _groupId:{
    type: mongoose.Types.ObjectId,
    ref: 'TaskGroup',
    required:true
  },
  completed:{
    type:Boolean,
    default:false
  }
},{timestamps:true});

const Task = mongoose.model('Task', task);

module.exports = Task;