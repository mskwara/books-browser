import React from 'react';
import { Form, Formik } from 'formik';
import AppThemeProvider from 'providers/ThemeProvider';
import Component from '.';

export default {
  title: 'ChipChooser',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Formik initialValues={{ language: 'en' }} onSubmit={() => {}}>
      <Form>
        <Component {...args} />
      </Form>
    </Formik>
  </AppThemeProvider>
);

const Default = Template.bind({});

Default.args = {
  name: 'language',
  label: 'Language',
  options: [
    {
      name: 'English',
      value: 'en',
    },
    {
      name: 'Polish',
      value: 'pl',
    },
  ],
};

export { Default };
