const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },

  // // If we need pagination
  pagination: {
    el: '.hero__pagination',
    clickable: true,
  },

  spaceBetween: 150,

});