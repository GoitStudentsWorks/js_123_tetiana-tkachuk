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

export function handleModalOverlayClick(e) {
  if (e.target === modalOverlay) {
    handleModalClose();
  }
}

export function handleEscKeyClick(e) {
  if (e.key === 'Escape') {
    handleModalClose();
  }
}

export function handleBlurClose (e) {
  if (!modalOverlay.contains(e.relatedTarget)) {
    handleModalClose();
  }
}


export function attachModalListeners() {
  modalWindowCloseBtn.addEventListener('click', handleModalClose);
  modalOverlay.addEventListener('click', handleModalOverlayClick);
  document.addEventListener('keydown', handleEscKeyClick);
  modalOverlay.addEventListener('blur', handleBlurClose);
}

export function handleModalClose() {
  modalOverlay.classList.remove('is-open');
  document.body.style.overflow = '';
  document.querySelector('.artist-info-wrapper')?.remove();

  modalWindowCloseBtn.removeEventListener('click', handleModalClose);
  modalOverlay.removeEventListener('click', handleModalOverlayClick);
  document.removeEventListener('keydown', handleEscKeyClick);
  modalOverlay.removeEventListener('blur', handleBlurClose);
}



