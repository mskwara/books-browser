import axios from 'axios';
import { compact, isEmpty, join, map } from 'lodash';

const API_URL = 'https://www.googleapis.com/books/v1';

const GET_BOOKS = 'GET_BOOKS';

const MAX_RESULTS = 10;

const getBooks = async ({ page, title, author, language }) => {
  let titleQuery = !isEmpty(title) ? `intitle:${title}` : undefined;
  let authorQuery = !isEmpty(author) ? `inauthor:${author}` : undefined;

  const res = await axios.get(`${API_URL}/volumes`, {
    params: {
      q: join(compact([titleQuery, authorQuery]), '+'),
      langRestrict: language,
      projection: 'lite',
      startIndex: page * MAX_RESULTS,
      maxResults: MAX_RESULTS,
      // eslint-disable-next-line no-undef
      key: process.env.REACT_APP_API_KEY,
    },
  });

  const volumeIds = map(res.data.items, ({ id }) => id);
  const fullDataPromises = map(volumeIds, (id) =>
    axios.get(`${API_URL}/volumes/${id}`)
  );
  const responses = await Promise.all(fullDataPromises);
  const books = map(responses, (res) => res.data);

  return { books, total: res.data.totalItems };
};

export { GET_BOOKS, getBooks };
