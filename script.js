// Set current copyright year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile navigation toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close mobile menu when a link is clicked
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Contact form handling (opens user's email client pre-filled)
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(Portfolio Inquiry from ${name});
  const body = encodeURIComponent(Name: ${name}\nEmail: ${email}\n\nMessage:\n${message});

  window.location.href = mailto:ngetichbrian789@://gmail.com{subject}&body=${body};
  formStatus.textContent = "Opening your email app to send the message...";
  contactForm.reset();
});