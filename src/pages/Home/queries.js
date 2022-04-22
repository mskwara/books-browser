import axios from 'axios';
import { compact, isEmpty, join } from 'lodash';

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

  return res.data.items;
};

export { GET_BOOKS, getBooks };
