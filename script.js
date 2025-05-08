// BUTTON CLICK EVENT
const magicButton = document.getElementById("magicButton");
const secretText = document.getElementById("secretText");

magicButton.addEventListener("click", () => {
  magicButton.textContent = "Clicked!";
  magicButton.classList.add("clicked");
});

magicButton.addEventListener("dblclick", () => {
  secretText.classList.remove("hidden");
});

// HOVER (on button)
magicButton.addEventListener("mouseover", () => {
  magicButton.style.border = "2px solid red";
});
magicButton.addEventListener("mouseout", () => {
  magicButton.style.border = "none";
});

// KEY PRESS DETECTION
document.addEventListener("keypress", (e) => {
  if (e.key.toLowerCase() === "s") {
    alert("You pressed 's' for secret!");
  }
});

// IMAGE GALLERY
const images = [
  "https://via.placeholder.com/300?text=Image+1",
  "https://via.placeholder.com/300?text=Image+2",
  "https://via.placeholder.com/300?text=Image+3"
];
let currentIndex = 0;

document.getElementById("nextImage").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("galleryImage").src = images[currentIndex];
});

// TABS
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll("#tab-content p");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;
    tabContents.forEach(p => {
      p.classList.toggle("hidden", p.dataset.content !== target);
    });
  });
});

// FORM VALIDATION
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailFeedback = document.getElementById("emailFeedback");
const passwordFeedback = document.getElementById("passwordFeedback");

document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  if (!emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailFeedback.textContent = "Please enter a valid email.";
    valid = false;
  } else {
    emailFeedback.textContent = "";
  }

  if (passwordInput.value.length < 8) {
    passwordFeedback.textContent = "Password must be at least 8 characters.";
    valid = false;
  } else {
    passwordFeedback.textContent = "";
  }

  if (valid) {
    alert("Form submitted successfully!");
  }
});

// REAL-TIME FEEDBACK
emailInput.addEventListener("input", () => {
  if (emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailFeedback.textContent = "";
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length >= 8) {
    passwordFeedback.textContent = "";
  }
});

// THEME TOGGLE
const themeToggleBtn = document.getElementById("themeToggle");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  // Optional: Update button text
  if (document.body.classList.contains("dark-theme")) {
    themeToggleBtn.textContent = "Light Theme";
  } else {
    themeToggleBtn.textContent = "Dark Theme";
  }
});

// SLIDESHOW FUNCTIONALITY
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

document.getElementById("nextImage").addEventListener("click", () => {
  // Hide current slide
  slides[currentSlide].classList.remove("active");

  // Move to next slide
  currentSlide = (currentSlide + 1) % slides.length;

  // Show new slide
  slides[currentSlide].classList.add("active");
});

// NAVBAR TOGGLE FOR MOBILE
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
