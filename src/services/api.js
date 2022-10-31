import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const API_KEY = 'f770e26d26a9f8dc8d3f9af112edaff0';
const queryParams = `3/movie/550?api_key=f770e26d26a9f8dc8d3f9af112edaff0`;

export const getMovies = async (query, page = 1) => {
  return await axios
    .get(`/?q=${query}&page=${page}&key=${API_KEY}${queryParams}`)
    .then(response => response.data);
};
