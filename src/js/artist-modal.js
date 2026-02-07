//////
//This is the main artist-modal.js function
//////

import axios from 'axios';
import { renderArtistInfo } from './artist-modal-render.js';

const TEMP_ID = '65ada227af9f6d155db46908';
const openModalBtn = document.querySelector('.tmp-open-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modalWindowCloseBtn = document.querySelector('.artists-modal-close-btn');
const modalClass = document.querySelector('.modal');

export async function handleOpenModal() {
  modalOverlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  const existing = document.querySelector('.artist-info-wrapper');
  if (existing) existing.remove();

  try {
    const { data } = await axios.get(
      `https://sound-wave.b.goit.study/api/artists/${TEMP_ID}/albums`
    );
    renderArtistInfo(data, modalClass);
    handleModalBio();
  } catch (error) {
    console.error('Request failed:', error);
  }
}

function handleModalClose() {
  modalOverlay.classList.remove('is-open');
  document.body.style.overflow = '';
  document.querySelector('.artist-info-wrapper')?.remove();
}

function handleModalBio() {
  const moreBioBtn = document.querySelector('.more-bio-btn');
  const moreBioClass = document.querySelector('.modal-bio');
  const closeBioBtn = document.querySelector('.artists-modal-bio-close-btn');

  moreBioBtn.addEventListener('click', () => moreBioClass.classList.add('is-open'));
  closeBioBtn.addEventListener('click', () => moreBioClass.classList.remove('is-open'));
}

openModalBtn.addEventListener('click', handleOpenModal);
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



