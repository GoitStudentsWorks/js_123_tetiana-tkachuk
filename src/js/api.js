import axios from 'axios';

import { BASE_URL, API_ENDPOINTS, FEEDBACKS_PER_PAGE, ARTISTS_PER_PAGE } from './constant';

axios.defaults.baseURL = BASE_URL;

export async function getFeedbacks() {
  const { data } = await axios.get(`${API_ENDPOINTS.FEEDBACKS}?limit=${FEEDBACKS_PER_PAGE}&page=1`);
  return data;
}

export async function getArtists(currentPage) {
  const {data} = await axios.get(`${API_ENDPOINTS.ARTISTS}?limit=${ARTISTS_PER_PAGE}&page=${currentPage}`);
  return data;
}

export async function getArtistsById(artistId) {
  const {data} = await axios.get(`${API_ENDPOINTS.ARTIST_BY_ID}${artistId}`);
  return data;
}