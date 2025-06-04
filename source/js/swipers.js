import Swiper from 'swiper';

import { Navigation, Pagination, Scrollbar } from 'swiper/modules';


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
  // on: {
  //   init: function () {
  //     updateMainText(this);
  //     updatePropertyNebo(this);// чтобы текст обновился при старте
  //   },
  //   slideChangeTransitionEnd: function () {
  //     updateMainText(this);
  //     updatePropertyNebo(this);
  //   },
  // }
});

export const swiperPrograms = new Swiper('.programs__swiper.swiper', {
  modules: [Navigation, Scrollbar],
  loop: false,

  navigation: {
    nextEl: '.programs__button.programs__button--next',
    prevEl: '.programs__button.programs__button--prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },

  breakpoints: {
    336: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 32,
    }
  },
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


