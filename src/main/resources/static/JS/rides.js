document
  .getElementById("taxiForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    var pickupLocation = document.getElementById("pickup").value;
    var destination = document.getElementById("destination").value;

    // Process the booking (for demonstration purposes, just log the values)
    console.log("Booking a taxi from " + pickupLocation + " to " + destination);

    // You can send the data to a server for processing here
    // For example, using fetch() or XMLHttpRequest
    // Then handle the response accordingly
  });
// JavaScript file for ride-related functionality

// Function to retrieve ride requests from the server
function getRideRequests() {
  // Simulate retrieving ride requests from the server
  // Replace this with actual AJAX request code
  const rideRequests = [
    { id: 1, pickup: "123 Main St", destination: "456 Elm St", time: "9:00 AM" },
    { id: 2, pickup: "789 Oak St", destination: "321 Pine St", time: "10:30 AM" },
    { id: 3, pickup: "555 Maple St", destination: "777 Birch St", time: "12:00 PM" }
  ];
  displayRideRequests(rideRequests);
}

// Function to display ride requests on the page
function displayRideRequests(rideRequests) {
  const rideRequestsList = document.getElementById("ride-requests-list");
  rideRequestsList.innerHTML = ""; // Clear previous entries

  rideRequests.forEach(request => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <div class="ride-request">
        <div class="ride-info">
          <span class="pickup">${request.pickup}</span>
          <span class="destination">${request.destination}</span>
          <span class="time">${request.time}</span>
        </div>
        <div class="actions">
          <button class="btn">Make Offer</button>
        </div>
      </div>
    `;
    rideRequestsList.appendChild(listItem);
  });
}

// Call the getRideRequests function when the page loads
window.onload = function() {
  getRideRequests();
};
