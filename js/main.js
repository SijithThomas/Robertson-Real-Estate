const swiper = new Swiper('.slide-show', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView:1,
    spaceBetween:30,
    centeredSlide:true,
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  });
  const test = new Swiper('.testimonial-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView:1,
    spaceBetween:30,
    centeredSlide:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });

