const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
  menuToggle.textContent = nav.classList.contains("show") ? "✕" : "☰";
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
    menuToggle.textContent = "☰";
  });
});

const categoryButtons = document.querySelectorAll(".menu-tabs button");
const foodCards = document.querySelectorAll(".food-card");

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    categoryButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.category;

    foodCards.forEach(card => {
      if (category === "all" || card.dataset.category === category) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

const bookingForm = document.getElementById("bookingForm");
const success = document.getElementById("success");

bookingForm.addEventListener("submit", event => {
  event.preventDefault();

  success.style.display = "block";
  bookingForm.reset();

  setTimeout(() => {
    success.style.display = "none";
  }, 4000);
});

const revealElements = document.querySelectorAll(
  ".intro-content, .intro-image, .food-card, .gallery-item, .reservation-box, .contact-details"
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

revealElements.forEach(element => {
  element.style.opacity = "0";
  element.style.transform = "translateY(30px)";
  element.style.transition = "opacity .8s ease, transform .8s ease";
  observer.observe(element);
});