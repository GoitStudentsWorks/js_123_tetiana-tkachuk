import { getArtists } from './api.js';
import { renderArtistInfo } from './artist-modal-render.js';
import { attachModalListeners } from './artist-modal.js';
import { initLoader, showLoader, hideLoader } from './loader.js';

const refs = {
  list: document.querySelector('.js-artists-list'),
  loadMoreBtn: document.querySelector('.js-artists-load'),
  modalOverlay: document.querySelector('.modal-overlay'),
  modalRoot: document.querySelector('.modal'),
};

const loaderOverlay = initLoader('body');

let page = 1;
let isLoading = false;

if (refs.list && refs.loadMoreBtn) {
  initArtists();
}

function initArtists() {
  refs.list.innerHTML = '';
  refs.loadMoreBtn.hidden = false;
  refs.loadMoreBtn.disabled = false;

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
  if (isLoading) return;
  isLoading = true;

  if (reset) page = 1;

  refs.loadMoreBtn.disabled = true;
  refs.loadMoreBtn.setAttribute('aria-busy', 'true');

  showLoader(loaderOverlay);

  try {
    const data = await getArtists(page);
    const artists = data?.artists ?? [];

    if (reset) refs.list.innerHTML = '';

    refs.list.insertAdjacentHTML(
      'beforeend',
      artists.map(createArtistCard).join('')
    );

    if (artists.length < 8) {
      refs.loadMoreBtn.hidden = true;
    } else {
      refs.loadMoreBtn.hidden = false;
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader(loaderOverlay);
    refs.loadMoreBtn.disabled = false;
    refs.loadMoreBtn.removeAttribute('aria-busy');
    isLoading = false;
  }
}

function createArtistCard(artist) {
  const id = artist._id;
  const name = artist.strArtist;
  const bio = artist.strBiographyEN || '';
  const description = bio.length > 120 ? `${bio.slice(0, 120)}...` : bio;
  const genres = artist.genres?.slice(0, 4) || [];
  const image = artist.strArtistThumb || '';

  return `
    <li class="artist-card">
      <div class="artist-card-image">
        <img src="${image}" alt="${name}" loading="lazy" />
      </div>

      <div class="artist-card-content">
        <ul class="artist-card-tags">
          ${genres.map(g => `<li class="artist-card-tag">${g}</li>`).join('')}
        </ul>

        <div class="artist-desc">
          <h3 class="artist-card-name">${name}</h3>
          <p class="artist-card-text">${description}</p>
        </div>

        <button
          class="artist-card-load-more js-artist-load-more"
          type="button"
          data-artist-id="${id}"
        >
          Learn More
          <svg class="artist-card-icon" width="24" height="24" aria-hidden="true">
            <use href="/img/sprite.svg#icon-caret-right"></use>
          </svg>
        </button>
      </div>
    </li>
  `;
}

async function onArtistClick(e) {
  const btn = e.target.closest('.js-artist-load-more');
  if (!btn) return;

  const artistId = btn.dataset.artistId;
  if (!artistId) return;

  openArtistModal(artistId);
}

async function openArtistModal(artistId) {
  if (!refs.modalOverlay || !refs.modalRoot) return;

  showLoader(loaderOverlay);

  refs.modalOverlay.classList.add('is-open');
  refs.modalOverlay.focus();
  document.body.style.overflow = 'hidden';

  document.querySelector('.artist-info-wrapper')?.remove();

  attachModalListeners();

  try {
    const res = await fetch(
      `https://sound-wave.b.goit.study/api/artists/${artistId}/albums`,
      { headers: { Accept: 'application/json' } }
    );

    const data = await res.json();
    renderArtistInfo(data, refs.modalRoot);
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader(loaderOverlay);
  }
}






