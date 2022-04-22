import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import { getBooks, GET_BOOKS } from './queries';
import { forEach, isEmpty, isNil } from 'lodash';
import useLoader from 'hooks/useLoader';
import BrowserView from './view';
import { formatBooks, joinPages } from './utils';

const BrowserContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { showLoader, hideLoader } = useLoader();
  const title = searchParams.get('title');
  const author = searchParams.get('author');
  const language = searchParams.get('language');

  const queryEnabled = !isEmpty(title) && !isEmpty(language);

  const {
    isLoading,
    isRefetching,
    isFetchingNextPage,
    data,
    refetch,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    GET_BOOKS,
    ({ pageParam = 0 }) =>
      getBooks({ page: pageParam, title, author, language }),
    {
      enabled: queryEnabled,
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage, totalPages) => {
        let itemsLength = 0;
        forEach(totalPages, (page) => {
          itemsLength += page.books.length;
        });

        return lastPage.total > itemsLength;
      },
    }
  );

  useEffect(() => {
    if (queryEnabled) {
      refetch();
    }
  }, [title, author, language]);

  useEffect(() => {
    if ((isLoading || isRefetching) && !isFetchingNextPage) {
      showLoader();
    } else {
      hideLoader();
    }
  }, [isLoading, isRefetching]);

  const onSubmit = (values) => {
    setSearchParams(values);
  };

  const joinedPages = !isNil(data) ? joinPages(data.pages, 'books') : undefined;

  return (
    <BrowserView
      onSubmit={onSubmit}
      books={formatBooks(joinedPages)}
      initialValues={{
        title: title || '',
        author: author || '',
        language: language || 'en',
      }}
      hasMore={hasNextPage}
      initialLoad={false}
      onLoadMore={fetchNextPage}
    />
  );
};

export default BrowserContainer;
