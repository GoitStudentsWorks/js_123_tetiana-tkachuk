function modalMenuHandler() {
  const openBtn = document.querySelector('.nav-button');
  const closeBtn = document.querySelector('.modal-close-button');
  const modalMenu = document.querySelector('.modal-menu');
  const modalLinks = document.querySelectorAll('.modal-nav-link');

  modalLinks.forEach(link => {
    link.addEventListener('click', () => {
      modalMenu.classList.remove('modal-open');
    });
  });

  openBtn.addEventListener('click', () => {
    modalMenu.classList.remove('slideOutUp');
    document.body.style.overflow = 'hidden';
    modalMenu.classList.add('modal-open', 'animate', 'slideInDown');
  });

  closeBtn.addEventListener('click', () => {
    modalMenu.classList.remove('slideInDown');
    modalMenu.classList.add('slideOutUp');
    setTimeout(() => {
      modalMenu.classList.remove('modal-open');
    }, 1000);

    document.body.style.overflow = 'auto';
  });
}

modalMenuHandler();

const { height: pageHeaderHeight } = document
  .querySelector('.header')
  .getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHeight}px`;
