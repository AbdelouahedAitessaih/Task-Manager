const {Router} = require('express');
const {getTaskGroups, getTaskGroup, addTaskGroup, updateTaskGroup, deleteTaskGroup} = require("../controllers/taskGroupController");

const router = Router();

router.get('/taskgroups', getTaskGroups)
      .get('/taskgroups/:id', getTaskGroup)
      .post('/taskgroups', addTaskGroup)
      .put('/taskgroups/:id', updateTaskGroup)
      .delete('/taskgroups/:id', deleteTaskGroup);

module.exports = router;