document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  // const scrollDownArrows = document.querySelectorAll(".scroll-down .arrow");
  // const scrollUpArrows = document.querySelectorAll(".scroll-up .arrow");
  const readMoreBtn = document.getElementById("read-more-btn");
  const textParagraph = document.querySelector(".about-content p");
  let currentSlide = 0;

  // scrollDownArrows.forEach((arrow) => {
  //   arrow.addEventListener("click", function () {
  //     const currentSection = arrow.closest(".full-page");
  //     const nextSection = currentSection.nextElementSibling;

  //     if (nextSection) {
  //       nextSection.scrollIntoView({ behavior: "smooth" });
  //     }
  //   });
  // });

  // scrollUpArrows.forEach((arrow) => {
  //   arrow.addEventListener("click", function () {
  //     const currentSection = arrow.closest(".full-page");
  //     const prevSection = currentSection.previousElementSibling;

  //     if (prevSection) {
  //       prevSection.scrollIntoView({ behavior: "smooth" });
  //     }
  //   });
  // });

  // // Xử lý sự kiện cuộn trang
  // window.addEventListener("scroll", function () {
  //   const sections = document.querySelectorAll(".full-page");
  //   sections.forEach((section) => {
  //     const rect = section.getBoundingClientRect();
  //     if (rect.top <= 0 && rect.bottom >= 0) {
  //       section.classList.add("active");
  //     } else {
  //       section.classList.remove("active");
  //     }
  //   });
  // });

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Tự động chuyển slide sau mỗi 5 giây
  setInterval(nextSlide, 5000);

  const slideshow = document.querySelector(".slideshow");
  slideshow.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
  });

  slideshow.addEventListener("mouseleave", () => {
    slideInterval = setInterval(nextSlide, 5000);
  });

  // Xử lý sự kiện khi bấm nút next
  nextBtn.addEventListener("click", nextSlide);

  // Xử lý sự kiện khi bấm nút prev
  prevBtn.addEventListener("click", prevSlide);

  // Hiển thị slide đầu tiên
  showSlide(currentSlide);

  readMoreBtn.addEventListener("click", function () {
    if (textParagraph.classList.contains("truncate")) {
      textParagraph.classList.remove("truncate");
      textParagraph.classList.add("expanded");
      readMoreBtn.textContent = "Read brief"; // Đổi văn bản nút
    } else {
      textParagraph.classList.remove("expanded");
      textParagraph.classList.add("truncate");
      readMoreBtn.textContent = "Read More"; // Đổi lại văn bản nút
    }
  });
});
