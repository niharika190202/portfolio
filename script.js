function toggleDescription(button) {
  const description = button.nextElementSibling;
  const isHidden = description.classList.contains('hidden');
  description.classList.toggle('hidden');
  button.textContent = isHidden ? 'Read Less' : 'Read More';
}
// Load Lottie animation
  lottie.loadAnimation({
    container: document.getElementById("lottie-arrow"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "animations/scroll-arrow.json"
  });

  // Scroll to top logic
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
