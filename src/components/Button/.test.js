import React from 'react';
import { screen, fireEvent, render } from 'setupTests';
import Button from '.';

const { getByText } = screen;

describe('Button', () => {
  it('has label inside', () => {
    render(<Button>Button Label</Button>);

    expect(getByText(/button label/i)).toBeTruthy();
  });

  it('reacts on click', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    fireEvent.click(getByText(/click me/i));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('not reacts on click when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click Me
      </Button>
    );

    fireEvent.click(getByText(/click me/i));

    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
