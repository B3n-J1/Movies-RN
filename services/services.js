import axios from "axios";

const api_url = "https://api.themoviedb.org/3";
const api_key = "api_key=1f71c7e5d938bf82fba1d8d0e988ec9f&language=fr";

export const getPopularMovies = async () => {
  const result = await axios.get(`${api_url}/movie/popular?${api_key}`);
  return result.data.results;
};

export const getUpcomingMovies = async () => {
  const result = await axios.get(`${api_url}/movie/upcoming?${api_key}`);
  return result.data.results;
};
export const getPopularTv = async () => {
  const result = await axios.get(`${api_url}/tv/popular?${api_key}`);
  return result.data.results;
};
// Get Family Movies
export const getFamilyMovies = async () => {
  const resp = await axios.get(
    `${api_url}/discover/movie?${api_key}&with_genres=10751`
  );
  return resp.data.results;
};

// Get Documnetery Movies
export const getDocumentaryMovies = async () => {
  const resp = await axios.get(
    `${api_url}/discover/movie?${api_key}&with_genres=99`
  );
  return resp.data.results;
};

// Get Movie by id
export const getMovie = async (id) => {
  const res = await axios.get(`${api_url}/movie/${id}?${api_key}`);
  return res.data;
};
// Get Movie Video
export const getMovieVideo = async (id) => {
  const res = await axios.get(`${api_url}/movie/${id}/videos?${api_key}`);
  return res.data;
};
