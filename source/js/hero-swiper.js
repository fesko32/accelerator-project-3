import Swiper from 'swiper';

import { Pagination } from 'swiper/modules';

export const swiperHero = new Swiper('.hero__swiper.swiper', {
  modules: [Pagination],
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (_, className) {
      return `<button class="${className}" type="button" ></button>`;
    },
  },
  on: {
    init: function () {
      updateMainText(this);
      updatePropertyNebo(this);// чтобы текст обновился при старте
    },
    slideChangeTransitionEnd: function () {
      updateMainText(this);
      updatePropertyNebo(this);
    },

  }
});


function updateMainText(swiper) {
  const currentSlide = swiper.slides[swiper.activeIndex];
  const title = currentSlide.querySelector('.hero__slide-title');
  const desc = currentSlide.querySelector('.hero__paragraph-wrap > p');

  if (title && desc) {
    document.querySelector('.hero__main-slide-title').innerHTML = title.innerHTML;
    document.querySelector('.hero__main-paragraph-wrap > p').innerHTML = desc.innerHTML;
  }
}

function updatePropertyNebo(index) {
  const realIndex = index.realIndex;
  const paragraphWrap = document.querySelector('.hero__main-paragraph-wrap');


  if (realIndex !== 0) {
    paragraphWrap.style.setProperty('--nb-h', '74px');
  } else {
    paragraphWrap.style.setProperty('--nb-h', ' 92px');
  }
}

