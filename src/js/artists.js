import { getArtists } from './api.js';
import { renderArtistInfo } from './artist-modal-render.js';
import {handleModalClose, handleEscKeyClick, handleModalOverlayClick, attachModalListeners} from './artist-modal.js'
import {mountLoader, initLoader, showLoader, hideLoader} from './loader.js'
const refs = {
  list: document.querySelector('.js-artists-list'),
  loadMoreBtn: document.querySelector('.js-artists-load'),
  modalOverlay: document.querySelector('.modal-overlay'),
  modalRoot: document.querySelector('.modal'),
  modalOverlay: document.querySelector('.modal-overlay'),
  modalWindowCloseBtn: document.querySelector('.artists-modal-close-btn'),
  containerClass: document.querySelector('.container'),
};
const loaderOverlay = initLoader('body')

let page = 1;
let isLoading = false;

if (refs.list && refs.loadMoreBtn) {
  initArtists();
}

function initArtists() {
  refs.list.innerHTML = '';
  refs.loadMoreBtn.hidden = false;

  refs.loadMoreBtn.addEventListener('click', onLoadMore);
  refs.list.addEventListener('click', onArtistClick);

  loadArtists(true);
}

async function onLoadMore() {
  if (isLoading) return;
  page += 1;
  await loadArtists(false);
}

async function loadArtists(reset) {
  isLoading = true;
  refs.loadMoreBtn.hidden = 'Loading...';

  if (reset) page = 1;
  
  showLoader(loaderOverlay)

  try{
    const data = await getArtists(page);
    const artists = data.artists;
    if (reset) refs.list.innerHTML = '';

    refs.list.insertAdjacentHTML(
      'beforeend',
      artists.map(createArtistCard).join('')
    );
  
    if (artists.length < 8) {
      refs.loadMoreBtn.hidden = true;
    }
  
    refs.loadMoreBtn.innerHTML = `
      Load More
      <svg class="artists__load-icon" width="20" height="20" aria-hidden="true">
        <use href="../img/sprite.svg#icon-down-arrow-alt"></use>
      </svg>
    `;
  } catch (error){
    console.log(error)
  } finally{
    hideLoader(loaderOverlay)
    isLoading = false;
  }




  
}

function createArtistCard(artist) {
  const id = artist._id;
  const name = artist.strArtist;
  const bio = artist.strBiographyEN || '';
  const description =
    bio.length > 120 ? `${bio.slice(0, 120)}...` : bio;
  const genres = artist.genres?.slice(0, 4) || [];
  const image = artist.strArtistThumb || '';

  return `
    <li class="artist-card">
      <div class="artist-card__image">
        <img src="${image}" alt="${name}" loading="lazy" />
      </div>

      <div class="artist-card__content">
        <ul class="artist-card__tags">
          ${genres.map(g => `<li class="artist-card__tag">${g}</li>`).join('')}
        </ul>

        <h3 class="artist-card__name">${name}</h3>
        <p class="artist-card__desc">${description}</p>

        <button
          class="artist-card__more js-artist-more"
          type="button"
          data-artist-id="${id}"
        >
          Learn More
          <svg class="artist-card__icon" width="16" height="16" aria-hidden="true">
            <use href="../img/sprite.svg#icon-caret-right"></use>
          </svg>
        </button>
      </div>
    </li>
  `;
}

async function onArtistClick(e) {
  const btn = e.target.closest('.js-artist-more');
  if (!btn) return;

  const artistId = btn.dataset.artistId;
  if (!artistId) return;

  openArtistModal(artistId);
}

async function openArtistModal(artistId) {
  showLoader(loaderOverlay)
  refs.modalOverlay.classList.add('is-open');
  refs.modalOverlay.focus()
  document.body.style.overflow = 'hidden';

  document.querySelector('.artist-info-wrapper')?.remove();
  attachModalListeners();  
  

  const res = await fetch(
    `https://sound-wave.b.goit.study/api/artists/${artistId}/albums`,
    { headers: { Accept: 'application/json' } }
  );

  const data = await res.json();
  renderArtistInfo(data, refs.modalRoot);
  hideLoader(loaderOverlay)
}






