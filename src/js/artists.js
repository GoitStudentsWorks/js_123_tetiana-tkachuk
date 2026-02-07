import { getArtists } from './api.js';
import { renderArtistInfo } from './artist-modal-render.js';

const refs = {
  list: document.querySelector('.js-artists-list'),
  loadMoreBtn: document.querySelector('.js-artists-load'),
  modalOverlay: document.querySelector('.modal-overlay'),
  modalRoot: document.querySelector('.modal'),
};

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
  refs.loadMoreBtn.textContent = 'Loading...';

  if (reset) page = 1;

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

  isLoading = false;
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
  refs.modalOverlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  document.querySelector('.artist-info-wrapper')?.remove();

  const res = await fetch(
    `https://sound-wave.b.goit.study/api/artists/${artistId}/albums`,
    { headers: { Accept: 'application/json' } }
  );

  const data = await res.json();
  renderArtistInfo(data, refs.modalRoot);
}


