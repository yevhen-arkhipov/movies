import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '29746791-dee289e667fd9f2b2347eb443';
const queryParams = `&image_type=photo&orientation=horizontal&per_page=15`;

export const getImages = async (query, page = 1) => {
  return await axios
    .get(`/?q=${query}&page=${page}&key=${API_KEY}${queryParams}`)
    .then(response => response.data);
};
