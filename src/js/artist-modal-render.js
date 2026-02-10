/////////
// These are the render functions for artist-modal.js file
/////////

import sprite from '../img/sprite.svg';

import {
  convertMstoMins,
  renderActiveYears,
  renderBiography,
} from './artist-modal-helpers.js';

export function renderGenres(data) {
  return data.genres
    .map(
      genre => `
    <li>
      <button class="artist-short-info-genre-btn">${genre}</button>
    </li>`
    )
    .join('');
}

export function renderAlbumsList(data) {
  const albumsList = data.albumsList;

  return albumsList
    .map(element => {
      const rowMarkup = element.tracks
        .map(track => {
          const link =
            track.movie === null
              ? ''
              : `
        <a href="${track.movie}" target="_blank" rel="noopener noreferrer">
          <svg class='artist-modal-youtube-icon' width="24" height="24">
            <use href="${sprite}#icon-youtube"></use>
          </svg>
        </a>`;

          return `
        <tr>
          <td>${track.strTrack}</td>
          <td>${convertMstoMins(track.intDuration)}</td>
          <td>${link}</td>
        </tr>`;
        })
        .join('');

      return `
      <div class="artist-song-table">
        <h3 class="artist-table-header">${element.strAlbum}</h3>
        <table>
          <colgroup>
            <col style="width: 97px">
            <col style="width: 74px">
            <col style="width: 24px">
          </colgroup>
          <thead>
            <tr><th>Track</th><th>Time</th><th>Link</th></tr>
          </thead>
          <tbody>${rowMarkup}</tbody>
        </table>
      </div>`;
    })
    .join('');
}

export function renderArtistInfo(data, modalClass) {
  const activeYears = renderActiveYears(data);
  const bio = renderBiography(data);
  const genresInfo = renderGenres(data);
  const renderedTables = renderAlbumsList(data);

  modalClass.insertAdjacentHTML(
    'beforeend',
    `
    <div class="artist-info-wrapper">
      <h2 class="artist-name-title">${data.strArtist}</h2>
      <div class="artist-info">
        <div class = "artist-img-wrapper">
          <img class="artist-img" src="${data.strArtistThumb}" alt="${data.strArtist} artist photo">
        </div>
        <div class="artist-short-info">
          <div class="artist-short-info-grid-wrapper">
            <div class="artist-short-info-years">
              <h3 class="short-info-small-header">Years active</h3>
              <p class="short-info-small-text">${activeYears}</p>
            </div>
            <div class="artist-short-info-sex">
              <h3 class="short-info-small-header">Sex</h3>
              <p class="short-info-small-text">${data.strGender}</p>
            </div>
            <div class="artist-short-info-members">
              <h3 class="short-info-small-header">Members</h3>
              <p class="short-info-small-text">${data.intMembers}</p>
            </div>
            <div class="artist-short-info-country">
              <h3 class="short-info-small-header">Country</h3>
              <p class="short-info-small-text">${data.strCountry}</p>
            </div>
          </div>
          <div class="artist-bio">
            <h3 class="short-info-small-header">Biography</h3>
            <div class = "short-info-small-text-wrapper">
              <p class="short-info-small-text">${data.strBiographyEN}</p>
            </div>
          </div>
          
          <div class="artist-short-info-genres">
            <ul class="artist-short-info-genres-list">${genresInfo}</ul>
          </div>
        </div>
      </div>
      <div class="artist-albums-wrapper">
        <h2 class="artist-albums-header">Albums</h2>
        ${renderedTables}
      </div>
      
    </div>`
  );
}
