
// Dark and light mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});

// Mobile navigation menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

// Close mobile menu after clicking a link
document.querySelectorAll("#navLinks a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});

// Highlight the selected navigation link
const sections = document.querySelectorAll("main section");
const navigationLinks = document.querySelectorAll("#navLinks a");

window.addEventListener("scroll", function () {
  let currentSection = "";

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navigationLinks.forEach(function (link) {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});

// Project details button
document.querySelectorAll(".detailsBtn").forEach(function (button) {
  button.addEventListener("click", function () {
    alert("This project was created using HTML, CSS and JavaScript!");
  });
});

// Contact form validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill in all the fields.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Thank you, " + name + "! Your message is ready.";
  formMessage.style.color = "green";

  contactForm.reset();
});

// Automatically display the current year
document.getElementById("year").textContent = new Date().getFullYear();
