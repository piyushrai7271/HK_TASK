const User = require('../models/user'); // Import User model

// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, mobile } = req.body; // Extract user details from the request body
    await User.query().insert({ name, email, mobile }); // Insert new user into database
    res.redirect('/add-user?success=true'); // Redirect with success flag
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Error creating user: ' + error.message });
  }
};

// Get all users from the database
const getAllUsers = async (req, res) => {
  try {
    const users = await User.query(); // Fetch all users
    res.status(200).json(users); // Send users as JSON response
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Error fetching users: ' + error.message });
  }
};

// Export controller functions
module.exports = {
  createUser,
  getAllUsers
};
