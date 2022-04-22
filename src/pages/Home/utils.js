import { forEach, get, map, slice, split, uniqBy } from 'lodash';

const DESCRIPTION_WORDS = 15;

const shortenText = (text, maxWords) =>
  slice(split(text, ' '), 0, maxWords).join(' ');

const formatBooks = (items) => {
  if (!items) {
    return [];
  }

  const mappedItems = map(items, (item) => ({
    id: item.id,
    title: item.volumeInfo.title,
    description: shortenText(item.volumeInfo.title, DESCRIPTION_WORDS),
    image: get(item, 'volumeInfo.imageLinks.thumbnail'),
  }));

  const uniqueItems = uniqBy(mappedItems, 'id');

  return uniqueItems;
};

const joinPages = (pages, key) => {
  const result = [];

  forEach(pages, (page) => {
    console.log(page);
    result.push(...page[key]);
  });

  return result;
};

export { formatBooks, joinPages };
