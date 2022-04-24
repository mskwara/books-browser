import React from 'react';
import { screen, fireEvent, render } from 'setupTests';
import Input from './view';

const { getByLabelText, getByText } = screen;

describe('Input', () => {
  it('has label', () => {
    render(<Input label="Input label" />);

    expect(getByLabelText(/Input label/i)).toBeTruthy();
  });

  it('changes value', () => {
    render(<Input label="Input label" name="input" />);

    const input = getByLabelText(/Input label/i);

    fireEvent.change(input, { target: { value: 'newValue' } });
    expect(input.value).toBe('newValue');
  });

  it('renders error', () => {
    render(<Input label="Input label" error="inputError" />);

    expect(getByText(/inputError/i)).toBeTruthy();
  });

  it('renders helper text', () => {
    render(<Input label="Input label" helperText="helperText" />);

    expect(getByText(/helperText/i)).toBeTruthy();
  });
});
