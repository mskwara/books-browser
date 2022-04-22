import React from 'react';
import { screen, fireEvent, render } from 'setupTests';
import ChipChooser from './view';

const { getByText } = screen;

const options = [
  {
    name: 'English',
    value: 'en',
  },
  {
    name: 'Polish',
    value: 'pl',
  },
];

describe('ChipChooser', () => {
  it('has label', () => {
    const handleClick = jest.fn();
    render(<ChipChooser options={options} value="en" label="Language" onClick={handleClick} />);

    expect(getByText(/Language/i)).toBeTruthy();
  });

  it('has chips', () => {
    const handleClick = jest.fn();
    render(<ChipChooser options={options} value="en" label="Language" onClick={handleClick} />);

    expect(getByText(/english/i)).toBeTruthy();
    expect(getByText(/polish/i)).toBeTruthy();
  });

  it('reacts on chip click', () => {
    const handleClick = jest.fn();
    render(<ChipChooser options={options} value="en" label="Language" onClick={handleClick} />);

    fireEvent.click(getByText(/polish/i));

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).lastCalledWith('pl');
  });
});
