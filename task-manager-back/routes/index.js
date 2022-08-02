var cors = require("cors");
const express = require("express");
const taskGroupRouter = require("./taskGroup");
const taskRouter = require("./task");

module.exports = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(taskGroupRouter);
    app.use(taskRouter);
}