const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/tasks', taskController.createTask);
router.get('/users/:id/tasks', taskController.getTasksByUser);

module.exports = router;
