const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Task = require('../models/task');

// GET: Add User Form
router.get('/add-user', (req, res) => {
  const success = req.query.success === 'true'; // ✅ Read flag
  res.render('userForm', { title: 'Add User', success });
});

// GET: Add Task Form
router.get('/add-task', async (req, res) => {
  try {
    const users = await User.query();
    const success = req.query.success === 'true';
    res.render('taskForm', { title: 'Add Task', users, success });
  } catch (err) {
    res.status(500).send("Error loading task form: " + err.message);
  }
});

// View: Tasks by user ID
router.get('/user/:id/tasks', async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await User.query().findById(userId);
    const tasks = await Task.query().where('user_id', userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.render('userTasks', { user, tasks });
  } catch (err) {
    console.error('Error fetching tasks for user:', err);
    res.status(500).send("Error loading tasks");
  }
});

module.exports = router;
