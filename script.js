// JavaScript to handle fullscreen project display
function expandProject(divId) {
    var projectDiv = document.getElementById(divId);
    var projectDetails = projectDiv.querySelector('.project-details').innerHTML; // Get inner HTML of project details

    // Show fullscreen view
    document.getElementById('fullscreen-view').style.display = 'flex'; 
    document.getElementById('fullscreen-content').innerHTML = projectDetails; // Insert project details into fullscreen content
}

// Function to close the fullscreen view
function closeFullscreen() {
    document.getElementById('fullscreen-view').style.display = 'none';
}



// SCROLL BUTTON FUNCTION 
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}




// NEW CODE HERE 

// Fullscreen project display with specific video
function expandProject(title, videoPath) {
  // Build project details with dynamic title and video
  const projectDetails = `
      <h2 style="text-align: center;">${title}</h2>
      <video controls autoplay style="width: 100%; max-height: 500px; margin-top: 20px;">
          <source src="${videoPath}" type="video/mp4">
          Your browser does not support the video tag.
      </video>
      <div style="margin-top: 20px;">
          <p>This project demonstrates the main functionalities with video walkthroughs. Here’s an overview of the project steps, challenges faced, and key outcomes.</p>
          <!-- Further details can be added here -->
      </div>
  `;

  // Insert content and display fullscreen view
  const fullscreenContent = document.getElementById('fullscreen-content');
  fullscreenContent.innerHTML = projectDetails;
  const fullscreenView = document.getElementById('fullscreen-view');
  fullscreenView.style.display = 'flex';

  // Fade-in effect
  setTimeout(() => {
      fullscreenView.style.opacity = '1';
  }, 10);
}

// Function to close the fullscreen view with fade-out effect
function closeFullscreen() {
  const fullscreenView = document.getElementById('fullscreen-view');
  fullscreenView.style.opacity = '0';
  setTimeout(() => {
      fullscreenView.style.display = 'none';
  }, 300); // Wait for opacity transition before hiding
}




// // INPUT BOX CODE HERE

// function validateForm() {
//     // Get input values
//     var name = document.getElementById('name').value.trim();
//     var email = document.getElementById('email').value.trim();
//     var subject = document.getElementById('subject').value.trim();
//     var message = document.getElementById('message').value.trim();
  
//     // Error message container
//     var errorMsg = document.getElementById('error-msg');
  
//     // Check if any of the fields are empty
//     if (name === "" || email === "" || subject === "" || message === "") {
//       errorMsg.innerHTML = "Please fill out all fields before sending the message.";
//       errorMsg.style.display = "block"; // Show error message
//     } else {
//       errorMsg.style.display = "none"; // Hide error message if fields are filled
//       // You can proceed with form submission here, e.g., sending the data to a server
//       alert("Form submitted successfully!");
//     }
//   }
  