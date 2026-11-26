const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

async function request(path, params = {}) {
  if (!API_KEY) {
    throw new Error("TMDB API key is missing. Set VITE_TMDB_API_KEY in .env.local.");
  }

  const url = new URL(`${BASE_URL}${path}`);
  url.search = new URLSearchParams({ api_key: API_KEY, ...params });
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.status === 401
      ? "TMDB rejected the API key. Check your configuration."
      : `TMDB request failed (${response.status}). Please try again.`);
  }
  return response.json();
}

export const getPopularMovies = async () =>
  (await request("/movie/popular")).results || [];

export const searchMovies = async (query) =>
  (await request("/search/movie", { query })).results || [];

export const getMovieDetails = (movieId) =>
  request(`/movie/${encodeURIComponent(movieId)}`, { append_to_response: "credits,videos" });
