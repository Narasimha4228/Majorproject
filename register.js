document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;
  
      // Validate passwords match
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
  
      // Save user data to localStorage
      const users = JSON.parse(localStorage.getItem("users")) || [];
      if (users.find(user => user.email === email)) {
        alert("Email is already registered!");
        return;
      }
  
      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));
  
      alert("Registration successful!");
      form.reset();
      window.location.href = "login.html"; // Redirect to login page after registration
    });
  });
  