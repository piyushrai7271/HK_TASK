// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { createUser, getAllUsers } = require("../controllers/userController");

// POST: Create User
router.post("/users", createUser);

// GET: Get All Users
router.get("/users", getAllUsers);

module.exports = router;
