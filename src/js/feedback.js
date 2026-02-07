// Імпорт функції - отримання відгуків з БД
import { getFeedbacks } from './api';

// Імпорт функціі - створення розмітки для відгуків
import {renderFeedbacks} from './feedback-render';

// Імпорт функцій - створення зірочок та сдайдеру для відгуків
import {createLeverStar, createFeedbaсksSlider } from './feedback-helpers';

createFeedbacksSlider();

export default async function createFeedbacksSlider() {
  
  try {
    // Функція - отримання відгуків з БД
    const feedbacksObject = await getFeedbacks();
    const feedbacksArray = feedbacksObject.data;
    // Створення основної розмітки відгуків з масиву
    renderFeedbacks(feedbacksArray);

  } catch (error) {
    console.log(`Error create feedbacks list`,error);
    return;
  };

  // Функція - Створення зірочок для відгуків
  createLeverStar();

  // Функція - створення Слайдеру відгуків
  createFeedbaсksSlider();

}
