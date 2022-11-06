import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'f770e26d26a9f8dc8d3f9af112edaff0';

const queryMovie = `/movie/`;
const queryTrending = `/trending/movie/day`;
const queryGenres = `/genre/movie/list`;
const querySearch = `/search/movie`;

export const TrendingMovie = async () => {
  try {
    const { data } = await axios.get(`${queryTrending}?api_key=${API_KEY}`);
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export const GetGenre = async () => {
  try {
    const { genres } = await axios.get(`${queryGenres}?api_key=${API_KEY}`);
    return genres;
  } catch (error) {
    console.error(error);
  }
};

export const GetMovieById = async id => {
  try {
    const { data } = await axios.get(
      `${queryMovie}${id}?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const GetMovieBySearch = async q => {
  try {
    const { data } = await axios.get(
      `${querySearch}?api_key=${API_KEY}&query=${q}&include_adult=false`
    );
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export const GetCast = async id => {
  try {
    const { data } = await axios.get(
      `${queryMovie}${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return data.cast;
  } catch (error) {
    console.error(error);
  }
};

export const GetReviews = async id => {
  try {
    const { data } = await axios.get(
      `${queryMovie}${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return data.results;
  } catch (error) {
    console.error(error);
  }
};
