let swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true, // 슬라이드 반복 여부
  freeMode: true, // 슬라이드 넘길 때 위치 고정 여부
  autoHeight: true, // 현재 활성 슬라이드높이 맞게 높이조정
});
