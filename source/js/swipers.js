import Swiper from 'swiper';

import { Navigation, Pagination, Scrollbar, Grid } from 'swiper/modules';


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
    el: '.programs__scrollbar',
    hide: false,
    draggable: true,


  },

  breakpoints: {
    336: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    1440: {
      allowTouchMove: false,
      slidesPerView: 3,
      spaceBetween: 32,
    }
  },
});

let mySwiper = null;

function initSwiper() {
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1439px)').matches;
  const isDesktop = window.matchMedia('(min-width: 1440px)').matches;

  // Уничтожаем предыдущий экземпляр Swiper, если он существует
  if (mySwiper) {
    mySwiper.destroy(true, true);
    mySwiper = null;
  }

  // Настройки для разных устройств
  let swiperSettings;

  if (isMobile) {
    swiperSettings = {
      slidesPerView: 1,
      spaceBetween: 20,
      grid: {
        rows: 2,
        fill: 'column',
      },
    };
  } else if (isTablet) {
    swiperSettings = {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row',
      },
    };
  } else if (isDesktop) {
    swiperSettings = {
      slidesPerView: 3,
      spaceBetween: 32,
      grid: {
        rows: 1,
      },
    };
  }

  // Инициализация нового экземпляра Swiper
  mySwiper = new Swiper('.news__swiper.swiper', {
    modules: [Navigation, Grid, Pagination],
    loop: false,
    speed: 400,
    navigation: {
      nextEl: '.news__button.news__button--next',
      prevEl: '.news__button.news__button--prev',
      disabledClass: 'news__button--disabled',
    },
    pagination: {
      el: '.news__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className}" type="button">${index + 1}</button>`;
      },
    },
    ...swiperSettings, // Распаковываем настройки для текущего устройства
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
          rows: 2,
          fill: 'column',
        },
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      1440: {
        slidesPerView: 'auto',
        slidesPerGroup: 3,
        spaceBetween: 32,
        grid: {
          rows: 1,
        },
      },
    },
    on: {
      update: function () {
        this.navigation.update();
        this.pagination.update();
      }
    }
  });
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
  initSwiper();
});

// Оптимизация обработчика resize
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    initSwiper();
  }, 250);
});
