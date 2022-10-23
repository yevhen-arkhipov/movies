import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '29746791-dee289e667fd9f2b2347eb443';

export function getImages(query, pageNumber) {
  return axios
    .get(
      `/?q=${query}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=15`
    )
    .then(response => {
      return response.data;
    });
}
