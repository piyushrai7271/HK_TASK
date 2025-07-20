const User = require('../models/user');
const Task = require('../models/task');

const renderAddUserForm = (req, res) => {
  const success = req.query.success === 'true';
  res.render('userForm', { title: 'Add User', success, layout: false });
};

const renderAddTaskForm = async (req, res) => {
  try {
    const users = await User.query();
    const success = req.query.success === 'true';
    res.render('taskForm', { title: 'Add Task', users, success, layout: false });
  } catch (err) {
    res.status(500).send('Error loading task form: ' + err.message);
  }
};

const renderUserTasks = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await User.query().findById(userId);
    const tasks = await Task.query().where('user_id', userId);

    if (!user) return res.status(404).send('User not found');

    res.render('userTasks', { user, tasks, layout: false });
  } catch (err) {
    console.error('Error fetching tasks for user:', err);
    res.status(500).send('Error loading tasks');
  }
};

const renderHomePage = (req, res) => {
  res.render('home', { title: 'Task Management Home', layout: false });
};

module.exports = {
  renderAddUserForm,
  renderAddTaskForm,
  renderUserTasks,
  renderHomePage
};
