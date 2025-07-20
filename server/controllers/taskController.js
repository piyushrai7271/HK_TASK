const Task = require('../models/task'); // Import the Task model

// Controller function to create a new task
const createTask = async (req, res) => {
  try {
    // Extract task details from the request body
    const { user_id, task_name, task_status } = req.body;

    // Insert a new task into the database
    await Task.query().insert({
      user_id: parseInt(user_id), // Ensure user_id is an integer
      task_name,
      task_status
    });

    // Redirect to add-task page with success flag
    res.redirect('/add-task?success=true');
  } catch (error) {
    // Handle and log any error that occurs during task creation
    console.error('Error adding task:', error);
    res.status(500).send({ error: error.message, message: 'Failed to add task' });
  }
};

// Controller function to get all tasks for a specific user
const getTasksByUser = async (req, res) => {
  try {
    const userId = req.params.id; // Extract user ID from the request parameters

    // Query tasks from the database for the given user ID
    const tasks = await Task.query().where('user_id', userId);

    // Send the tasks as a JSON response
    res.status(200).json(tasks);
  } catch (error) {
    // Handle and log any error that occurs during fetching tasks
    res.status(500).send({ error: error.message, message: 'Failed to retrieve tasks' });
  }
};


module.exports = {
  createTask,
  getTasksByUser
};
