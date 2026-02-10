import { handleModalClose } from './artist-modal';

function modalMenuHandler() {
  const openBtn = document.querySelector('.nav-button');
  const closeBtn = document.querySelector('.modal-close-button');
  const modalMenu = document.querySelector('.modal-menu');
  const modalLinks = document.querySelectorAll('.modal-nav-link');

  modalLinks.forEach(link => {
    link.addEventListener('click', () => {
      modalMenu.classList.remove('modal-open');
      handleModalClose();
    });
  });

  openBtn.addEventListener('click', () => {
    modalMenu.classList.add('modal-open');
  });
  closeBtn.addEventListener('click', () => {
    modalMenu.classList.remove('modal-open');
  });
}

modalMenuHandler();

// const header = document.querySelector('.header');
const { height: pageHeaderHeight } = document
  .querySelector('.header')
  .getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHeight}px`;
