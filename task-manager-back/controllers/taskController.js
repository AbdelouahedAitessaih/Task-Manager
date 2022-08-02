const createError = require('http-errors');
const Task = require("../models/task");

const getTasks = (req, res, next) => {
    Task.find({_groupId: req.params.id})
        .then((tasks) => res.send(tasks))
        .catch((err) => next(createError(500)));
}

const getTask = (req, res, next) => {
    Task.findOne({_groupId: req.params.id, _id: req.params.taskId})
        .then((task) => res.send(task))
        .catch((err) => next(createError(500)));
}

const addTask = (req, res, next) => {
    Task({...req.body,_groupId:req.params.id}).save()
        .then((task) => res.status(201).send(task))
        .catch((err) => next(createError(500)));
}

const updateTask = (req, res, next) => {
    Task.findOneAndUpdate({_groupId: req.params.id, _id: req.params.taskId}, { $set:req.body }, {new: true})
        .then((task) => res.send(task))
        .catch((err) => next(createError(500)));
}

const deleteTask = (req, res, next) => {
    Task.findOneAndDelete({_groupId: req.params.id, _id: req.params.taskId})
        .then(() => res.send({ message: "Deleted Successfully"}))
        .catch((err) => next(createError(500)));
}

module.exports = {
    getTasks,
    getTask,
    addTask,
    updateTask,
    deleteTask
}