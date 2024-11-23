var swiper = new Swiper(".mainBan", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".lbSwiper", {
    effect: "coverflow",
    slidesPerView: 4,
    spaceBetween: 30,
    
    loop: false,

    coverflowEffect: {
      
      stretch: 0,
      depth: 100,
      modifier: 1,
      scale:1,
      rotate:0,
      slideShadows: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    
  });