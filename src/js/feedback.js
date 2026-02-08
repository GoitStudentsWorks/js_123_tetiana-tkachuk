// Імпорт функції - отримання відгуків з БД
import { getFeedbacks } from './api';

// Імпорт функціі - створення розмітки для відгуків
import {renderFeedbacks} from './feedback-render';

// Імпорт функцій - створення зірочок та сдайдеру для відгуків
import {createLeverStar, createFeedbaсksSlider, setSliderNavigation } from './feedback-helpers';

import { showToast } from "./izitoast";

// Запуск функції створення слайдеру
createFeedbacksSlider();

// ===========================================================================
// Слухач події на зміну ширини екрана - для визначення кнопок навігації слайдера
// ПРИМІТКА - Вимкнений, бо задіяні Responsive breakpoints Navigation Swiper
// ===========================================================================
// window.addEventListener('resize', setSliderNavigation);

// ===========================================================================
// Функція створення слайдеру
// ===========================================================================
export default async function createFeedbacksSlider() {
  
  try {
    // Функція - отримання відгуків з БД
    const feedbacksObject = await getFeedbacks();
    const feedbacksArray = feedbacksObject.data;
    // Створення основної розмітки відгуків з масиву
    renderFeedbacks(feedbacksArray);

  } catch (error) {
    // Повідомлення про помилку
    showToast(`Error create feedbacks list`, 'error' );
    return;
  };

  // Функція - Створення зірочок для відгуків
  createLeverStar();

  // Функція - створення Слайдеру відгуків
  createFeedbaсksSlider();

  // Функція - Перевірка розміру екрана та визначення кнопок навігації слайдера
  // ПРИМІТКА - Вимкнена, бо задіяні Responsive breakpoints Navigation Swiper
  // setSliderNavigation();

}

