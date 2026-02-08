import { renderArtistInfo } from './artist-modal-render.js';


const modalOverlay = document.querySelector('.modal-overlay');
const modalWindowCloseBtn = document.querySelector('.artists-modal-close-btn');
const modalClass = document.querySelector('.modal');



export async function handleOpenModal(artistId) {
  modalOverlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  document.querySelector('.artist-info-wrapper')?.remove();


  try {
    const res = await fetch(
      `https://sound-wave.b.goit.study/api/artists/${artistId}/albums`,
      { headers: { Accept: 'application/json' } }
    );
    const data = await res.json();
    renderArtistInfo(data, modalClass);
  } catch (error) {
    console.error('Request failed:', error);
  } 
}

function handleModalClose() {
  modalOverlay.classList.remove('is-open');
  document.body.style.overflow = '';
  document.querySelector('.artist-info-wrapper')?.remove();

  modalWindowCloseBtn.removeEventListener('click', handleModalClose);
  modalOverlay.removeEventListener('click', handleModalClose);
  document.removeEventListener('keydown', handleModalClose);
}

modalWindowCloseBtn.addEventListener('click', handleModalClose);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    handleModalClose();
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    handleModalClose();
  }
});