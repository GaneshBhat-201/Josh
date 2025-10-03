const slides = document.querySelectorAll(".rec-card");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function showSlide(index) {
  const slider = document.querySelector(".rec-listing");
  slider.style.transform = `translateX(-${index * 365}px)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");

  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");

  currentIndex = index;
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

setInterval(() => {
  let nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}, 5000);