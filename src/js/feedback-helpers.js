// Імпорт бібліотеки створення зірочок
import Raty from 'raty-js';
import 'raty-js/src/raty.css';

// Імпорт бібліотеки Swiper with all modules installed (bundle)
import Swiper from 'swiper/bundle';
// import styles
import 'swiper/css/bundle';
// import 'swiper/element/css/navigation';
// import 'swiper/element/css/pagination';

import starOn from '../img/feedback-img/star-on.png';
import starOff from '../img/feedback-img/star-off.png';

// =============================================================
// Функція - Створення зірочок для відгуків
// =============================================================
export function createLeverStar() {
  // Опції для бібліотеки створення зірочок
  const ratyOption = {
    starOn,
    starOff,
    space: false,
    readOnly: true,
    halfShow: false,
    // score:3.59,
  };

  // Всі DOM-елементи з відгуками
  const feedbacksAll = Array.from(document.querySelectorAll('[data-raty]'));

  // Перебираємо масив елементів фідбеків
  feedbacksAll.map(feedback => {
    // Отримуємо з data-атрибута елемента числове значення рейтингу
    const feedbackScore = Number(feedback.dataset.score);
    // Створення для кожного відгуку піделементу - зірочки
    const raty = new Raty(feedback, { ...ratyOption, score: feedbackScore });
    // Ініціалізація зірочки для кожного елементу
    raty.init();
  });
}

// =============================================================
// Функція - створення Слайдеру відгуків
// =============================================================
export function createFeedbaсksSlider() {
  // init Swiper:
  const swiper = new Swiper('.swiper', {
    // Optional parameters :
    // Орієнтація
    direction: 'horizontal',
    // Прокрутка слайдів по кругу
    loop: false,
    // Підстройка висоти "slider wrapper" під висоту активного слайду
    autoHeight: false,

    // Transition effect - ефекти переходу.
    // Can be 'slide', 'fade', 'cube', 'coverflow', 'flip', 'creative' or 'cards'
    effect: 'slide',

    // Swiper height (in px).
    // height: null,

    // Pagination Parameters
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

    // Navigation Parameters
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      addIcons: false,
      // Navigation arrows - for mobile
      // Кнопки навігації вимкнені
      enabled: false,
    },

    // Enables navigation through slides using mouse wheel.
    // Можна проводити навігацію за допомогою колесика миші
    // mousewheel: true,

    // Responsive breakpoints -точки перелому для адаптивної верстки
    breakpoints: {
      // When window width is >= 768px (Tablet and Desktop)
      768: {
        navigation: {
          // Кнопки навігації задіяні
          enabled: true,
        },
      },
    },

    // Іf we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
}

// =============================================================
// Функція - Перевірка розміру екрана та визначення кнопок навігації слайдера
// Не використовується, бо задіяні Responsive breakpoints Navigation Swiper
// =============================================================
export function setSliderNavigation() {
  // Визначення ширини екрану
  const width = window.innerWidth;
  // Елемент - контейнер слайдера
  const swiperContainer = document.querySelector('.swiper');

  // Видимість кнопок навігації слайдера в залежності від ширини
  if (width < 768) {
    // Додаємо клас для недоступності кнопок навігації
    // Кнопки навігації НЕвидимі та НЕдоступні
    swiperContainer.classList.add('swiper-navigation-disabled');
  } else {
    // Видаляємо клас для недоступності кнопок навігації
    // Кнопки навігації видимі та доступні
    swiperContainer.classList.remove('swiper-navigation-disabled');
  }
}
