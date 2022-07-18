const express = require('express');
const app = express();
var cors = require('cors');

const mongoose = require('./database/mongoose');

const TaskGroup = require('./database/models/taskGroup');
const Task = require('./database/models/task');

app.use(cors());

app.use(express.json());

app.get('/taskgroups', (req,res)=>{
    TaskGroup.find({})
             .then((groups) => res.send(groups))
             .catch((err) => res.status(500).send({error: "Some error has happened !"}));
});

app.get('/taskgroups/:id', (req,res)=>{
    TaskGroup.findOne({_id : req.params.id})
             .then((group) => res.send(group))
             .catch((err) => res.status(500).send({error: "Some error has happened !"}));
});

app.post('/taskgroups', (req,res)=>{
    TaskGroup(req.body).save()
             .then((group) => res.status(201).send(group))
             .catch((err) => res.status(500).send({error: "Some error has happened !"}));
});

app.put('/taskGroups/:id', (req,res) => {
  TaskGroup.findOneAndUpdate({_id:req.params.id}, { $set:req.body }, {new: true})
           .then((group) => res.send(group))
           .catch((err) => res.status(500).send({error: "Some error has happened !"}));
});

app.delete('/taskgroups/:id', (req,res) => {
    Task.deleteMany({_groupId: req.params.id})
        .then()
        .catch((err) => res.status(500).send({error: "Some error has happened !"}));
    TaskGroup.findByIdAndDelete(req.params.id)
             .then(() => res.send({ message: "Deleted Successfully"}))
             .catch((err) => res.status(500).send({error: "Some error has happened !"}));
});

// 

app.get('/taskgroups/:id/tasks', (req,res)=>{
   Task.find({_groupId: req.params.id})
       .then((tasks) => res.send(tasks))
       .catch((err) => res.status(500).send({error: "Some error has happened !"}));;
});

app.get('/taskgroups/:id/tasks/:taskId', (req,res)=>{
    Task.findOne({_groupId: req.params.id, _id: req.params.taskId})
        .then((task) => res.send(task))
        .catch((err) => res.status(500).send({error: "Some error has happened !"}));;
 });

app.post('/taskgroups/:id/tasks', (req,res)=>{
    Task({...req.body,_groupId:req.params.id}).save()
             .then((task) => res.status(201).send(task))
             .catch((err) => res.status(500).send({error: "Some error has happened !"}));
});

app.put('/taskGroups/:id/tasks/:taskId', (req,res) => {
    Task.findOneAndUpdate({_groupId: req.params.id, _id: req.params.taskId}, { $set:req.body }, {new: true})
             .then((task) => res.send(task))
             .catch((err) => res.status(500).send({error: "Some error has happened !"}));
});

app.delete('/taskGroups/:id/tasks/:taskId', (req,res) => {
    Task.findOneAndDelete({_groupId: req.params.id, _id: req.params.taskId})
             .then(() => res.send({ message: "Deleted Successfully"}))
             .catch((err) => res.status(500).send({error: "Some error has happened !"}));
});

app.listen(3000, ()=>console.log('Server started on port 3000'));