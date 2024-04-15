// Event listener for when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get the theme toggle button
  const toggleButton = document.getElementById("theme-toggle");
  // Check if dark mode is enabled from local storage
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  // If dark mode is enabled, add the "dark-mode" class to the body
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
  }

  // Add event listener to toggle dark mode when the button is clicked
  toggleButton.addEventListener("click", () => {
    // Toggle the "dark-mode" class on the body
    document.body.classList.toggle("dark-mode");
    // Check if dark mode is currently enabled
    const isDarkModeNow = document.body.classList.contains("dark-mode");
    // Update the dark mode setting in local storage
    localStorage.setItem("darkMode", isDarkModeNow);
  });
});

// Event listener for when the window content is loaded
window.addEventListener("DOMContentLoaded", (event) => {
  // Initialize slider index
  let sliderIndex = 0;
  // Get all slider images
  const slides = document.querySelectorAll(
    "#hero-slider img, #hero-slider2 img"
  );
  // Function to display next slide
  const nextSlide = () => {
    // Hide the current slide
    slides[sliderIndex].style.display = "none";
    // Move to the next slide
    sliderIndex = (sliderIndex + 1) % slides.length;
    // Display the next slide
    slides[sliderIndex].style.display = "block";
  };
  // Initially hide all slides except the first one
  slides.forEach((slide, index) => {
    slide.style.display = index === 0 ? "block" : "none";
  });
  // Set interval to switch slides every 5 seconds
  setInterval(nextSlide, 5000);
});


// Function to reveal hidden text on hover
function revealText(element) {
  // Get the full text and summary elements within the given element
  var fullText = element.querySelector(".full-text");
  var summary = element.querySelector(".summary");
  // Toggle display of full text and summary on hover
  if (fullText.style.display === "block") {
    // If full text is currently displayed, hide it and show the summary
    fullText.style.display = "none";
    summary.style.opacity = 1;
  } else {
    // If full text is not displayed, show it and hide the summary
    fullText.style.display = "block";
    summary.style.opacity = 0;
  }
}

// Event listener to validate email inputs
document.querySelectorAll('input[type="email"]').forEach((input) => {
  // Add input event listener to each email input field
  input.addEventListener("input", () => {
    // Check if input value is a valid email address
    if (input.validity.typeMismatch) {
      // If input is not a valid email, set custom validity message
      input.setCustomValidity("No fakes!");
      // Display error message
      input.reportValidity();
    } else {
      // If input is a valid email, clear custom validity message
      input.setCustomValidity("");
    }
  });
});
