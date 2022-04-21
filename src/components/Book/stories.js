import React from 'react';
import AppThemeProvider from 'providers/ThemeProvider';
import Component from '.';

export default {
  title: 'Book',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Default = Template.bind({});
const WithImage = Template.bind({});

Default.args = {
  title: 'Lord of The Rings',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
};

WithImage.args = {
  ...Default.args,
  image:
    'https://www.swiatksiazki.pl/media/catalog/product/cache/eaf55611dc9c3a2fa4224fad2468d647/6/9/6999906707569.jpg',
};

export { Default, WithImage };
