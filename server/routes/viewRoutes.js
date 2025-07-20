// routes/viewRoutes.js
const express = require("express");
const router = express.Router();
const {
  renderAddUserForm,
  renderAddTaskForm,
  renderUserTasks,
  renderHomePage,
  renderUserListPage
} = require("../controllers/viewController");

router.get("/", renderHomePage);
router.get("/add-user", renderAddUserForm);
router.get("/add-task", renderAddTaskForm);
router.get("/user/:id/tasks", renderUserTasks);
router.get('/view-users', renderUserListPage);

module.exports = router;
