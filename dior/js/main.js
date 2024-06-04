const swiperTop = new Swiper(".top-swiper", {
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiperProducts = new Swiper(".about-swiper", {
  loop: true,
  slidesPerView: 3,
  freeMode: true,
});

document.querySelectorAll(".accordeon-triger").forEach((item) => {
  item.addEventListener("click", () => {
    item.parentNode.classList.toggle("accordeon-item-active");
  });
});
