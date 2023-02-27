
const swiper = new Swiper('.image-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    createElements: true,
    centeredSlides: true,
    focusableElements: '.price_btn',
    initialSlide: 0,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
    const menuBtn = document.querySelector('.active-btn');
menuBtn.addEventListener('click', () => document.body.classList.toggle('active'));