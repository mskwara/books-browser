import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { Button as MUIButton, Typography } from '@mui/material';
import styles from './styles';

const Button = ({ onClick, children, submit, sx }) => {
  return (
    <MUIButton
      type={submit ? 'submit' : undefined}
      onClick={onClick}
      variant="contained"
      sx={{ ...styles.root, ...sx }}
    >
      <Typography variant="h3" sx={styles.text}>
        {children}
      </Typography>
    </MUIButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  submit: PropTypes.bool,
  sx: PropTypes.object,
};

Button.defaultProps = {
  onClick: noop,
  submit: false,
  sx: {},
};

export default Button;
