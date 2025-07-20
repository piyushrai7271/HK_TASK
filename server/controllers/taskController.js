const Task = require('../models/task');

const createTask = async (req, res) => {
  try {
    const { user_id, task_name, task_type } = req.body;
    await Task.query().insert({
      user_id: parseInt(user_id),
      task_name,
      task_type
    });

    res.redirect('/add-task?success=true');
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).send({ error: error.message });
  }
};

const getTasksByUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const tasks = await Task.query().where('user_id', userId);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createTask,
  getTasksByUser
};
