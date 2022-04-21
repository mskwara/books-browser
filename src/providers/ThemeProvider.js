import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material';

const palette = {
  white: '#ffffff',
  black: '#000000',
  overlay: 'rgba(0, 0, 0, 0.2)',
  typo: '#242424',
  primary: {
    main: '#0079bf',
    dark: '#005a8f',
    light: '#005a8f',
    contrastText: '#ffffff',
  },
  neutral: {
    main: '#bfbfbf',
  },
};

const fontFamily = 'Roboto';

const theme = createTheme({
  palette,
  spacing: 1,
  shape: {
    borderRadius: 1,
  },
  typography: {
    h1: {
      fontSize: 24,
      fontFamily,
    },
    h2: {
      fontSize: 20,
      fontFamily,
    },
    h3: {
      fontSize: 16,
      fontFamily,
    },
    body: {
      fontSize: 14,
      fontFamily,
    },
    tiny: {
      fontSize: 10,
      fontFamily,
    },
    allVariants: {
      color: palette.typo,
    },
  },
});

const ThemeProvider = ({ children }) => (
  <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
