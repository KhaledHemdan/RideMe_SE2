// JavaScript code for the Admin Dashboard page

// Sample data for demonstration (replace with actual data)
const tasks = [
    {
      id: 1,
      task: "Verify new driver registrations",
      status: "Pending"
    },
    {
      id: 2,
      task: "Manage discounts for specific areas",
      status: "In Progress"
    },
    {
      id: 3,
      task: "View event logs for each ride",
      status: "Completed"
    },
    // Add more tasks as needed
  ];
  
  // Function to display tasks in the admin dashboard
  function displayTasks() {
    const tasksContainer = document.getElementById("tasks-container");
  
    // Clear any existing content
    tasksContainer.innerHTML = "";
  
    // Loop through tasks data and create HTML elements to display them
    tasks.forEach(task => {
      // Create elements
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task");
  
      const taskId = document.createElement("p");
      taskId.textContent = `Task ID: ${task.id}`;
  
      const taskName = document.createElement("h3");
      taskName.textContent = task.task;
  
      const taskStatus = document.createElement("p");
      taskStatus.textContent = `Status: ${task.status}`;
  
      // Append elements to taskDiv
      taskDiv.appendChild(taskId);
      taskDiv.appendChild(taskName);
      taskDiv.appendChild(taskStatus);
  
      // Append taskDiv to tasksContainer
      tasksContainer.appendChild(taskDiv);
    });
  }
  
  // Call the displayTasks function when the page loads
  window.addEventListener("load", displayTasks);
  