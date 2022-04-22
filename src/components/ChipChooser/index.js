import React from 'react';
import { Field as FormikField } from 'formik';
import PropTypes from 'prop-types';
import ChipChooserView from './view';
import { optionsShape } from './shapes';

const ChipChooser = ({ options, name, ...props }) => {
  return (
    <FormikField name={name} {...props}>
      {({ field: { value }, form: { setFieldValue } }) => (
        <ChipChooserView
          value={value}
          options={options}
          onClick={(newValue) => setFieldValue(name, newValue)}
          {...props}
        />
      )}
    </FormikField>
  );
};

ChipChooser.propTypes = {
  options: optionsShape.isRequired,
  name: PropTypes.string.isRequired,
};

export default ChipChooser;
