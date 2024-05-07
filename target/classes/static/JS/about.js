// JavaScript code for the About Us page

// Function to display team members
function displayTeamMembers() {
    // Sample team members data (replace with actual data)
    const teamMembers = [
      {
        name: "John Doe",
        position: "CEO",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "john-doe.jpg" // Replace with actual image URL
      },
      {
        name: "Jane Smith",
        position: "CTO",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "jane-smith.jpg" // Replace with actual image URL
      },
      // Add more team members as needed
    ];
  
    const teamContainer = document.getElementById("team-container");
  
    // Clear any existing content
    teamContainer.innerHTML = "";
  
    // Loop through the team members data and create HTML elements to display them
    teamMembers.forEach(member => {
      // Create elements
      const memberDiv = document.createElement("div");
      memberDiv.classList.add("team-member");
  
      const image = document.createElement("img");
      image.src = member.image;
      image.alt = member.name;
  
      const name = document.createElement("h3");
      name.textContent = member.name;
  
      const position = document.createElement("p");
      position.textContent = member.position;
  
      const bio = document.createElement("p");
      bio.textContent = member.bio;
  
      // Append elements to memberDiv
      memberDiv.appendChild(image);
      memberDiv.appendChild(name);
      memberDiv.appendChild(position);
      memberDiv.appendChild(bio);
  
      // Append memberDiv to teamContainer
      teamContainer.appendChild(memberDiv);
    });
  }
  
  // Call the displayTeamMembers function when the page loads
  window.addEventListener("load", displayTeamMembers);
  