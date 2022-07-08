const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/taskmanagerdb').then(()=>console.log('DB Connected Successfully !')).catch((e)=>console.log(e));

module.exports = mongoose;