const express = require('express');
const router = express.Router();
const {createTask,getTasksByUser} = require('../controllers/taskController');

router.post('/tasks', createTask);
router.get('/users/:id/tasks', getTasksByUser);

module.exports = router;
