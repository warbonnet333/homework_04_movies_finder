export const popularFilmUrl = key =>
  `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`;

export const filmUrlWithId = (key, id) =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`;

export const filmUrlWithQuery = (key, query) =>
  `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${key}&language=en-US&page=1&include_adult=false`;

export const castUrl = (key, id) =>
  `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`;

export const reviewUrl = (key, id) =>
  `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`;
