import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import styles from './styles';

const Book = ({ image, title, description, sx }) => {
  return (
    <Box sx={{ ...styles.root, ...sx }}>
      {image && <Box component="img" src={image} alt={title} sx={styles.image} />}
      <Box sx={styles.content}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body">{description}</Typography>
      </Box>
    </Box>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  sx: PropTypes.object,
};

Book.defaultProps = {
  image: null,
  sx: {},
};

export default Book;
