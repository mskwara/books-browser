import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import { getBooks, GET_BOOKS } from './queries';
import { isEmpty, isNil } from 'lodash';
import useLoader from 'hooks/useLoader';
import BrowserView from './view';
import { countItems, formatBooks, joinPages } from './utils';

const BrowserContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { showLoader, hideLoader } = useLoader();
  const title = searchParams.get('title');
  const author = searchParams.get('author');
  const language = searchParams.get('language');

  const queryEnabled = !isEmpty(title) && !isEmpty(language);

  const {
    status,
    isLoading,
    isRefetching,
    isFetchingNextPage,
    data,
    refetch,
    hasNextPage,
    fetchNextPage,
    remove,
  } = useInfiniteQuery(
    GET_BOOKS,
    ({ pageParam = 0 }) =>
      getBooks({ startIndex: pageParam, title, author, language }),
    {
      enabled: queryEnabled,
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage, totalPages) => {
        const itemsLength = countItems(totalPages);

        return lastPage.totalItems > itemsLength ? itemsLength : undefined;
      },
    }
  );

  useEffect(() => {
    if (queryEnabled) {
      remove();
      refetch();
    }
  }, [title, author, language]);

  useEffect(() => {
    if (isFetchingNextPage) {
      return;
    }
    if (isLoading || isRefetching) {
      showLoader();
    } else {
      hideLoader();
    }
  }, [isLoading, isRefetching]);

  const onSubmit = (values) => {
    setSearchParams(values);
  };

  const joinedPages = !isNil(data) ? joinPages(data.pages, 'items') : undefined;

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
      onLoadMore={() => {
        if (!isLoading && !isRefetching && !isFetchingNextPage) {
          fetchNextPage();
        }
      }}
      isDataFetched={status !== 'idle'}
    />
  );
};

export default BrowserContainer;
