const express = require('express');
const router = express.Router();
const User = require('../models/user');

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

module.exports = router;
