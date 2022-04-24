import React from 'react';
import { screen, render } from 'setupTests';
import Book from '.';

const { getByText, getByRole } = screen;

describe('Book', () => {
  it('has title and description', () => {
    render(<Book title="bookTitle" description="bookDescription" />);

    expect(getByText(/bookTitle/i)).toBeTruthy();
    expect(getByText(/bookDescription/i)).toBeTruthy();
  });

  it('has proper img attributes', () => {
    render(<Book title="bookTitle" description="bookDescription" image="some-url" />);

    const img = getByRole('img');
    expect(img).toHaveAttribute('src', 'some-url');
    expect(img).toHaveAttribute('alt', 'bookTitle');
  });
});
