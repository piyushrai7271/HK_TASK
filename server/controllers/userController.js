const User = require('../models/user');

const createUser = async (req, res) => {
  try {
    const { name, email, mobile } = req.body;
    await User.query().insert({ name, email, mobile });
    res.redirect('/add-user?success=true');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Error creating user: ' + error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.query();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Error fetching users: ' + error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers
};
