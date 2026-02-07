// Імпорт бібліотеки створення зірочок
import Raty from "raty-js";
import 'raty-js/src/raty.css';

// Імпорт бібліотеки Swiper with all modules installed (bundle)
import Swiper from 'swiper/bundle';
// import styles 
import 'swiper/css/bundle';
import 'swiper/element/css/navigation';
import 'swiper/element/css/pagination';

// Функція - Створення зірочок для відгуків
// =============================================================
export function createLeverStar() {

  // Опції для бібліотеки створення зірочок
  const ratyOption = {
  starOn: './img/feedback-img/star-on.png',
  starOff: './img/feedback-img/star-off.png',
  space: false,
  readOnly: true,
  halfShow: false,
  // score:3.59,
  }

  // Всі DOM-елементи з відгуками
  const feedbacksAll = Array.from(document.querySelectorAll('[data-raty]'));

  // Перебираємо масив елементів фідбеків
  feedbacksAll.map(feedback => {
    // Отримуємо з data-атрибута елемента числове значення рейтингу
    const feedbackScore = Number(feedback.dataset.score);
    // Створення для кожного відгуку піделементу - зірочки
    const raty = new Raty(feedback, {...ratyOption, score:feedbackScore} );
    // Ініціалізація зірочки для кожного елементу
    raty.init();
  });

}


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
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // Іf we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}