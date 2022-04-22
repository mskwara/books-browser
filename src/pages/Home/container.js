import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getBooks, GET_BOOKS } from './queries';
import { isEmpty } from 'lodash';
import BrowserView from './view';
import { formatBooks } from './utils';
import useLoader from 'hooks/useLoader';

const BrowserContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { showLoader, hideLoader } = useLoader();
  const title = searchParams.get('title');
  const author = searchParams.get('author');
  const language = searchParams.get('language');

  const queryEnabled = !isEmpty(title) && !isEmpty(language);

  const { isLoading, isRefetching, data, refetch } = useQuery(
    GET_BOOKS,
    () => getBooks(title, author, language),
    {
      enabled: queryEnabled,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (queryEnabled) {
      refetch();
    }
  }, [title, author, language]);

  useEffect(() => {
    if (isLoading || isRefetching) {
      showLoader();
    } else {
      hideLoader();
    }
  }, [isLoading, isRefetching]);

  const onSubmit = (values) => {
    setSearchParams(values);
  };

  return (
    <BrowserView
      onSubmit={onSubmit}
      books={formatBooks(data)}
      initialValues={{
        title: title || '',
        author: author || '',
        language: language || 'en',
      }}
    />
  );
};

export default BrowserContainer;
