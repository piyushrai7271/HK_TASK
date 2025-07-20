const User = require('../models/user');

exports.createUser = async (req, res) => {
  try {
    const { name, email, mobile } = req.body;
    const user = await User.query().insert({ name, email, mobile });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  const users = await User.query();
  res.json(users);
};
