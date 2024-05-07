// JavaScript code for form validation and submission logic

// Function to validate registration form
function validateRegistrationForm() {
    // Get form inputs
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    // Simple validation: check if fields are not empty
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
      alert("Please fill in all fields");
      return false;
    }
  
    // More complex validation can be added here (e.g., check password strength, validate email format, etc.)
  
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
  
    // Validation passed
    return true;
  }
  
  // Function to validate login form
  function validateLoginForm() {
    // Get form inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Simple validation: check if fields are not empty
    if (email === "" || password === "") {
      alert("Please fill in all fields");
      return false;
    }
  
    // More complex validation can be added here
  
    // Validation passed
    return true;
  }
  
  // Function to handle registration form submission
  function submitRegistrationForm() {
    // Validate form
    if (validateRegistrationForm()) {
      // If validation passes, submit the form (e.g., send data to server)
      alert("Registration successful!");
      // You can add code here to send the form data to the server
    }
  }
  
  // Function to handle login form submission
  function submitLoginForm() {
    // Validate form
    if (validateLoginForm()) {
      // If validation passes, submit the form (e.g., send data to server)
      alert("Login successful!");
      // You can add code here to send the form data to the server
    }
  }
  