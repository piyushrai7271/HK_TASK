function validateUserForm() {
  const name = document.querySelector('input[name="name"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const mobile = document.querySelector('input[name="mobile"]').value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[6-9]\d{9}$/;

  if (!name) {
    alert("Name is required");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Invalid email format");
    return false;
  }

  if (!mobileRegex.test(mobile)) {
    alert("Invalid mobile number. It should start with 6-9 and be 10 digits");
    return false;
  }

  return true;
}
