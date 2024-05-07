// JavaScript code for profile-related functionality

// Function to retrieve and display user profile information
function displayUserProfile() {
    // In a real application, you would retrieve user profile data from the server
    // For demonstration purposes, let's assume we have a sample user object
    const user = {
      username: "JohnDoe",
      email: "john@example.com",
      fullName: "John Doe",
      age: 30,
      // Add more profile data properties as needed
    };
  
    // Display user profile information on the page
    document.getElementById("username").innerText = user.username;
    document.getElementById("email").innerText = user.email;
    document.getElementById("fullName").innerText = user.fullName;
    document.getElementById("age").innerText = user.age;
    // Add more profile data display elements as needed
  }
  
  // Call the function to display user profile information when the page loads
  window.onload = displayUserProfile;
  