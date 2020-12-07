const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  speed: 1000,

  autoplay: {
    delay: 8000,
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

//added span bullets container 
const contPagin = mySwiper.pagination.bullets;
const contSlide = mySwiper.slides;

  for (let i = 0; i < contPagin.length; i++) {
    const nameShore = document.createElement("span");
    nameShore.classList.add("swiper-pagination-span");

    let textShore = contSlide[i+1].querySelector(".slide__titel").innerText;
    textShore = textShore[0] + textShore.slice(1).toLowerCase();
    // Добавил + 1 к массиву DOM el тк. идет дубляция el в слайдере

    nameShore.innerHTML = textShore;
    contPagin[i].append(nameShore);
  }