import axios from 'axios';
import { compact, isEmpty, join, map } from 'lodash';

const API_URL = 'https://www.googleapis.com/books/v1';

const GET_BOOKS = 'GET_BOOKS';

const getBooks = async (title, author, language) => {
  let titleQuery = !isEmpty(title) ? `intitle:${title}` : undefined;
  let authorQuery = !isEmpty(author) ? `inauthor:${author}` : undefined;

  const res = await axios.get(`${API_URL}/volumes`, {
    params: {
      q: join(compact([titleQuery, authorQuery]), '+'),
      langRestrict: language,
      projection: 'lite',
    },
  });
  const volumeIds = map(res.data.items, ({ id }) => id);
  const fullDataPromises = map(volumeIds, (id) =>
    axios.get(`${API_URL}/volumes/${id}`)
  );
  const responses = await Promise.all(fullDataPromises);
  const books = map(responses, (res) => res.data);

  return books;
};

export { GET_BOOKS, getBooks };
