import KEY from "./KEY";
import {
  popularFilmUrl,
  filmUrlWithId,
  filmUrlWithQuery,
  castUrl,
  reviewUrl
} from "../helpers/urlsForFetch";

const axios = require("axios").default;

export const fetchPopularFilms = () => {
  return axios.get(popularFilmUrl(KEY)).then(response => response.data);
};

export const fetchFilmById = id => {
  return axios.get(filmUrlWithId(KEY, id)).then(response => response.data);
};

export const fetchFilmsByQuery = query => {
  return axios
    .get(filmUrlWithQuery(KEY, query))
    .then(response => response.data);
};

export const fetchCastById = id => {
  return axios.get(castUrl(KEY, id)).then(response => response.data);
};

export const fetchReviewsById = id => {
  return axios.get(reviewUrl(KEY, id)).then(response => response.data);
};
