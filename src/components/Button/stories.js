import React from 'react';
import AppThemeProvider from 'providers/ThemeProvider';
import Component from '.';

export default {
  title: 'Button',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Default = Template.bind({});

Default.args = {
  children: 'Default',
};

export { Default };
