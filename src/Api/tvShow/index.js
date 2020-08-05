import { API_URL, API_KEY } from '../../Config';
const urls = [
  `${API_URL}tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=4`,
  `${API_URL}tv/top_rated?api_key=${API_KEY}&language=en-US&page=3`,
];
const fetchData = () => {
  return Promise.all(
    urls.map(async (items) => {
      const response = await fetch(items);
      return await response.json();
    })
  );
};
export default fetchData;
