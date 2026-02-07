import refs from './refs';

export function renderFeedbacks(feedbacks) {
  const feedbacksMarkup = feedbacks
    .map( ({_id, name, rating, descr}) => {
        return `
        <div class="swiper-slide">
          <div class="feedback-block">
            <div data-raty class="feedback-rating" data-id=${_id} data-score=${rating}></div>
            <p class="feedback-descr">${descr}</p>
            <p class="feedback-name">${name}</p>
          </div>
        </div>`
    })
    .join('');
  
  refs.feedbacksList.insertAdjacentHTML('beforeend', feedbacksMarkup);
}