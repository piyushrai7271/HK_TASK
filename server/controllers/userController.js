const User = require('../models/user');

const createUser = async (req, res) => {
  try {
    const { name, email, mobile } = req.body;

    await User.query().insert({
      name,
      email,
      mobile
    });

    res.redirect('/add-user?success=true'); // ✅ Send query param
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).send({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.query();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers
};
