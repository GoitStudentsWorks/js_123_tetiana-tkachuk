
import Raty from "raty-js";
import 'raty-js/src/raty.css';

const ratyOption = {
  starOn: './img/feedback-img/star-on.png',
  starOff: './img/feedback-img/star-off.png',
  space: false,
  readOnly: true,
  halfShow: false,
  // score:3.59,
}

// Створення
const raty1 = new Raty(document.querySelector('[data-raty="1"]'), {...ratyOption, score:1.4} );
const raty2 = new Raty(document.querySelector('[data-raty="2"]'), {...ratyOption, score:2.1} );
const raty3 = new Raty(document.querySelector('[data-raty="3"]'), {...ratyOption, score:2.9} );

// Ініціалізація 
raty1.init();
raty2.init();
raty3.init();

// Встановлення рівня
// raty.score(3);


// =============================================================
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // Орієнтація
  direction: 'horizontal',
  // Прокрутка слайдів по кругу
  loop: false,

    // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

