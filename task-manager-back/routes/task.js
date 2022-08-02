const {Router} = require('express');
const {getTasks, getTask, addTask, updateTask, deleteTask} = require("../controllers/taskController");

const router = Router();

router.get('/taskgroups/:id/tasks', getTasks)
      .get('/taskgroups/:id/tasks/:taskId', getTask)
      .post('/taskgroups/:id/tasks', addTask)
      .put('/taskgroups/:id/tasks/:taskId', updateTask)
      .delete('/taskgroups/:id/tasks/:taskId', deleteTask);

module.exports = router;