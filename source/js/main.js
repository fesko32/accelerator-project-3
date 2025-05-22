// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
const buttonElement = document.querySelector('.hero__menu-button');
const listElement = document.querySelector('.hero__list');
const heroElement = document.querySelector('.hero__inner-wrap');
const heroItems = listElement.querySelectorAll('.hero__item');

buttonElement.addEventListener('click', (evt) => {
  evt.stopPropagation();
  buttonElement.classList.toggle('active');
  heroElement.classList.toggle('active');
  listElement.classList.toggle('is-open');
  closeAllSubmenus();
});

const bodyElement = document.body;

bodyElement.addEventListener('click', (evt) => {
  // Если клик по кнопке или по открытому списку — не закрываем
  if (
    buttonElement.contains(evt.target) ||
    listElement.contains(evt.target)
  ) {
    // Если это клик по ссылке в подменю — закрываем всё
    if (evt.target.closest('.hero__subitem .hero__link')) {
      closeAllSubmenus();
      buttonElement.classList.remove('active');
      heroElement.classList.remove('active');
      listElement.classList.remove('is-open');
    }
    return;
  }

  // Если клик вне меню и кнопки — закрываем всё
  closeAllSubmenus();
  buttonElement.classList.remove('active');
  heroElement.classList.remove('active');
  listElement.classList.remove('is-open');
});

heroItems.forEach((item) => {
  item.addEventListener('click', () => {
    const sublist = item.querySelector('.hero__sublist');
    const links = sublist?.querySelectorAll('.hero__link');
    if (sublist) {

      item.classList.toggle('active');
      const isOpen = sublist.classList.toggle('is-open');
      links?.forEach((link) => {
        link.setAttribute('tabindex', isOpen ? '0' : '-1');
      });
    } else {
      buttonElement.classList.remove('active');
      heroElement.classList.remove('active');
      listElement.classList.remove('is-open');
    }
  });
});

function closeAllSubmenus() {
  const allSubitems = document.querySelectorAll('.hero__item.active');
  const allSublists = document.querySelectorAll('.hero__sublist.is-open');

  allSubitems.forEach((item) => item.classList.remove('active'));
  allSublists.forEach((sublist) => sublist.classList.remove('is-open'));

}
