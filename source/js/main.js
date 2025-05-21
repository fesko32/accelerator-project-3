// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
const buttonElement = document.querySelector('.hero__menu-button');
const listElement = document.querySelector('.hero__list');
const heroElement = document.querySelector('.hero__inner-wrap');
const heroSubLinks = listElement.querySelectorAll('.hero__item > .hero__link');

buttonElement.addEventListener('click', (evt) => {
  evt.stopPropagation();
  listElement.classList.toggle('active');
  buttonElement.classList.toggle('active');
  heroElement.classList.toggle('active');

});


const bodyElement = document.body;

bodyElement.addEventListener('click', (evt) => {
  if (
    buttonElement.contains(evt.target) ||
    listElement.contains(evt.target)
  ) {
    return;
  }
  listElement.classList.remove('active');
  buttonElement.classList.remove('active');
  heroElement.classList.remove('active');
});

heroSubLinks.forEach((link) => {
  link.addEventListener('click', (evt) => {
    const sublist = link.nextElementSibling;

    if (sublist && sublist.classList.contains('hero__sublist')) {
      evt.preventDefault();
      sublist.classList.toggle('active');
    } else {
      listElement.classList.remove('active');
      buttonElement.classList.remove('active');
    }
  });
});
