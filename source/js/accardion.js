const accardion = () => {
  const accardionList = document.querySelector('.faq__accordion-list');

  if (!accardionList) return;

  accardionList.addEventListener('click', (evt) => {
    const clickedItem = evt.target.closest('.faq__accordion-item');
    const button = clickedItem.querySelector('.faq__accordion-button');

    if (!clickedItem) return;

    clickedItem.classList.toggle('open');
    if (button) {
      button.classList.toggle('is-active')
    }
  });
};

export { accardion };
