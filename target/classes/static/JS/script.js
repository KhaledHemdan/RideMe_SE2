const logregBox = document.querySelector(".logreg-box");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", () => {
  logregBox.classList.add("active");
});

loginLink.addEventListener("click", () => {
  logregBox.classList.remove("active");
});
// Main JavaScript file for handling client-side interactions and logic

// Function to toggle the visibility of a given element
function toggleVisibility(elementId) {
  const element = document.getElementById(elementId);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

// Function to display a modal with a given message
function displayModal(message) {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const modalMessage = document.getElementById("modal-message");

  modalMessage.innerText = message;
  modal.style.display = "block";

  // Close the modal when the user clicks anywhere outside of it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

// Close the modal when the user clicks on the close button
document.getElementById("close-modal").onclick = function() {
  document.getElementById("modal").style.display = "none";
}

// Call a function to initialize any necessary page elements when the page loads
window.onload = function() {
  // You can add initialization logic here
};
