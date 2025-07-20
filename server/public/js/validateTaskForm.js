function validateTaskForm() {
  const taskName = document.querySelector('input[name="task_name"]').value;
  if (!taskName.trim()) {
    alert("Task name is required");
    return false;
  }
  return true;
}
