document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkModeNow = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkModeNow);
  });
});


window.addEventListener("DOMContentLoaded", (event) => {
  let sliderIndex = 0;
  const slides = document.querySelectorAll(
    "#hero-slider img, #hero-slider2 img"
  );
  const nextSlide = () => {
    slides[sliderIndex].style.display = "none";
    sliderIndex = (sliderIndex + 1) % slides.length;
    slides[sliderIndex].style.display = "block";
  };
  slides.forEach((slide, index) => {
    slide.style.display = index === 0 ? "block" : "none";
  });
  setInterval(nextSlide, 5000);
});

function revealText(element) {
  var fullText = element.querySelector(".full-text");
  var summary = element.querySelector(".summary");
  if (fullText.style.display === "block") {
    fullText.style.display = "none";
    summary.style.opacity = 1;
  } else {
    fullText.style.display = "block";
    summary.style.opacity = 0;
  }
}
document.querySelectorAll('input[type="email"]').forEach((input) => {
  input.addEventListener("input", () => {
    if (input.validity.typeMismatch) {
      input.setCustomValidity("No fakes!");
      input.reportValidity();
    } else {
      input.setCustomValidity("");
    }
  });
});
