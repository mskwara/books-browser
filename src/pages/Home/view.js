import React from 'react';
import { useTranslation } from 'react-i18next';
import { isEmpty, map, noop } from 'lodash';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroller';
import Input from 'components/Input';
import Button from 'components/Button';
import Book from 'components/Book';
import ChipChooser from 'components/ChipChooser';
import getValidation from './validation';
import styles from './styles';
import { getLanguages } from './consts';
import Loader from 'components/Loader';

const BrowserView = ({ books, onSubmit, onLoadMore, hasMore, initialValues, isDataFetched }) => {
  const { t } = useTranslation();
  const validationSchema = getValidation(t);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.content}>
        <Box sx={styles.form}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ isValid }) => (
              <Form>
                <Typography variant="h1" sx={styles.title}>
                  {t('appTitle')}
                </Typography>
                <Typography variant="body">{t('easyAndConvenient')}</Typography>
                <Input name="title" label={t('title')} sx={styles.row} />
                <Input
                  name="author"
                  label={t('author')}
                  helperText={t('optional')}
                  sx={styles.row}
                />
                <ChipChooser
                  name="language"
                  label={t('language')}
                  options={getLanguages(t)}
                  sx={styles.row}
                />
                <Button submit disabled={!isValid} sx={styles.submit}>
                  {t('submit')}
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
        <Box sx={styles.results}>
          {isDataFetched && isEmpty(books) && (
            <Typography variant="h3">{t('noResults')}</Typography>
          )}
          <InfiniteScroll
            style={{ width: '100%' }}
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={hasMore}
            loader={
              <Box key="loader" sx={styles.infiniteLoaderWrapper}>
                <Loader />
              </Box>
            }
          >
            {map(books, (book, index) => (
              <Book
                key={book.id}
                title={book.title}
                description={book.description}
                image={book.image}
                sx={{
                  ...styles.book,
                  ...(index === books.length - 1 && { marginBottom: 0 }),
                }}
              />
            ))}
          </InfiniteScroll>
        </Box>
      </Box>
    </Box>
  );
};

BrowserView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  initialValues: PropTypes.shape({
    title: PropTypes.string,
  }),
  onLoadMore: PropTypes.func,
  hasMore: PropTypes.bool,
  isDataFetched: PropTypes.bool,
};

BrowserView.defaultProps = {
  books: [],
  initialValues: {},
  onLoadMore: noop,
  hasMore: false,
  isDataFetched: false,
};

export default BrowserView;
