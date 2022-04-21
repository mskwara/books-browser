import React from 'react';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const InputView = ({ field, error, type, helperText, label, sx, ...props }) => {
  return (
    <TextField
      {...field}
      {...props}
      type={type}
      label={label}
      error={!isEmpty(error)}
      helperText={error || helperText}
      variant="outlined"
      sx={{
        width: '100%',
        ...sx,
      }}
      InputProps={{
        sx: {
          borderRadius: 10,
          backgroundColor: 'white',
        },
      }}
      FormHelperTextProps={{
        sx: {
          margin: 0,
        },
      }}
    />
  );
};

InputView.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.any,
  error: PropTypes.string,
  helperText: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
  sx: PropTypes.objectOf(PropTypes.any),
};

InputView.defaultProps = {
  error: '',
  helperText: '',
  type: 'text',
  sx: {},
};

export default InputView;
