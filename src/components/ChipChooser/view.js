import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import styles from './styles';
import { optionsShape } from './shapes';

const ChipChooserView = ({ options, value, label, sx, onClick }) => {
  return (
    <Box sx={{ ...styles.flexRow, ...sx }}>
      <Typography variant="h3" sx={styles.label}>
        {`${label}:`}
      </Typography>
      <Box sx={styles.flexRow}>
        {map(options, (option) => (
          <Box
            key={option.value}
            sx={{
              ...styles.chip,
              ...(value === option.value && styles.selected),
            }}
            onClick={() => onClick(option.value)}
          >
            <Typography variant="body">{option.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

ChipChooserView.propTypes = {
  options: optionsShape.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  sx: PropTypes.object,
};

ChipChooserView.defaultProps = {
  sx: {},
};

export default ChipChooserView;
