import '@testing-library/jest-dom';
import ThemeProvider from 'providers/ThemeProvider';
import { render } from '@testing-library/react';

const customRender = (ui, options) => render(ui, { wrapper: ThemeProvider, ...options });

export * from '@testing-library/react';

export { customRender as render };
