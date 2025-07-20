const User = require('../models/user'); // Import User model
const Task = require('../models/task'); // Import Task model

// Render the Add User form page
const renderAddUserForm = (req, res) => {
  const success = req.query.success === 'true';
  res.render('userForm', { title: 'Add User', success, layout: false });
};

// Render the Add Task form page with a list of users
const renderAddTaskForm = async (req, res) => {
  try {
    const users = await User.query(); // Fetch all users
    const success = req.query.success === 'true';
    res.render('taskForm', { title: 'Add Task', users, success, layout: false });
  } catch (err) {
    res.status(500).send('Error loading task form: ' + err.message);
  }
};

// Render the page that shows tasks for a specific user
const renderUserTasks = async (req, res) => {
  try {
    const userId = parseInt(req.params.id); // Get user ID from request
    const user = await User.query().findById(userId); // Find the user
    const tasks = await Task.query().where('user_id', userId); // Get user’s tasks

    if (!user) return res.status(404).send('User not found');

    res.render('userTasks', { user, tasks, layout: false });
  } catch (err) {
    console.error('Error fetching tasks for user:', err);
    res.status(500).send('Error loading tasks');
  }
};

// Render the homepage
const renderHomePage = (req, res) => {
  res.render('home', { title: 'Task Management Home', layout: false });
};

// Render the list of all users
const renderUserListPage = async (req, res) => {
  try {
    const users = await User.query(); // Fetch all users
    res.render('viewUsers', { users, layout: false });
  } catch (error) {
    res.status(500).send('Error loading user list: ' + error.message);
  }
};

// Export controller functions
module.exports = {
  renderAddUserForm,
  renderAddTaskForm,
  renderUserTasks,
  renderHomePage,
  renderUserListPage
};
