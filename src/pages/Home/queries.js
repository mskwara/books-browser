import axios from 'axios';
import { map } from 'lodash';

const API_URL = 'https://www.googleapis.com/books/v1';

const GET_BOOKS = 'GET_BOOKS';

const getBooks = async (title) => {
  const res = await axios.get(
    `${API_URL}/volumes?q=intitle:${title}&projection=lite`
  );
  const volumeIds = map(res.data.items, ({ id }) => id);
  const fullDataPromises = map(volumeIds, (id) =>
    axios.get(`${API_URL}/volumes/${id}`)
  );
  const responses = await Promise.all(fullDataPromises);
  const books = map(responses, (res) => res.data);

  return books;
};

export { GET_BOOKS, getBooks };
