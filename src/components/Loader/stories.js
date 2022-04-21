import React from 'react';
import AppThemeProvider from 'providers/ThemeProvider';
import Component from '.';

export default {
  title: 'Loader',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Default = Template.bind({});

Default.args = {};

export { Default };
