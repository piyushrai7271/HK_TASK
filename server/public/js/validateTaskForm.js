function validateTaskForm() {
  const taskName = document.querySelector('input[name="task_name"]').value.trim();
  const taskStatus = document.querySelector('select[name="task_status"]').value;
  const userId = document.querySelector('select[name="user_id"]').value;

  if (!taskName) {
    alert("Task name is required");
    return false;
  }

  if (taskName.length < 3) {
    alert("Task name must be at least 3 characters long");
    return false;
  }

  if (!taskStatus) {
    alert("Please select a task status");
    return false;
  }

  if (!userId) {
    alert("Please select a user");
    return false;
  }

  return true;
}
