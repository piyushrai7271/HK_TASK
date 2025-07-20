const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  try {
    const { user_id, task_name, task_type } = req.body;
    const task = await Task.query().insert({ user_id, task_name, task_type });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTasksByUser = async (req, res) => {
  const { id } = req.params;
  const tasks = await Task.query().where('user_id', id);
  res.json(tasks);
};
