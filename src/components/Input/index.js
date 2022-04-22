import React from 'react';
import { Field as FormikField } from 'formik';
import InputView from './view';

const Input = (props) => {
  return (
    <FormikField {...props}>
      {({ field, meta }) => <InputView {...field} error={meta.error} {...props} />}
    </FormikField>
  );
};

export default Input;
