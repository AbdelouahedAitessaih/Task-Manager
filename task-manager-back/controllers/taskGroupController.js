const createError = require('http-errors');
const TaskGroup = require("../models/taskGroup");
const Task = require("../models/task");

const getTaskGroups = (req, res, next) => {
    TaskGroup.find({})
        .then((groups) => res.send(groups))
        .catch((err) => next(createError(500)));
 }

const getTaskGroup = (req, res, next) => {
    TaskGroup.findOne({_id : req.params.id})
        .then((group) => res.send(group))
        .catch((err) => next(createError(500)));
}

const addTaskGroup = (req, res, next) => {
    TaskGroup(req.body).save()
        .then((group) => res.status(201).send(group))
        .catch((err) => next(createError(500)));
}

const updateTaskGroup = (req, res, next) => {
    TaskGroup.findOneAndUpdate({_id:req.params.id}, { $set:req.body }, {new: true})
        .then((group) => res.send(group))
        .catch((err) => next(createError(500)));
}

const deleteTaskGroup = (req, res, next) => {
    Task.deleteMany({_groupId: req.params.id})
        .then()
        .catch((err) => next(createError(500)));
    TaskGroup.findByIdAndDelete(req.params.id)
        .then(() => res.send({ message: "Deleted Successfully"}))
        .catch((err) => next(createError(500)));
}

 module.exports = {
    getTaskGroups,
    getTaskGroup,
    addTaskGroup,
    updateTaskGroup,
    deleteTaskGroup
 }