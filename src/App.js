import React from 'react';
import i18next from 'i18next';
import { BrowserRouter } from 'react-router-dom';
import { initReactI18next } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import ThemeProvider from 'providers/ThemeProvider';
import LoaderProvider from 'providers/Loader';
import Routing from 'pages';
import en from 'i18n/en';

const queryClient = new QueryClient();

i18next.use(initReactI18next).init({
  resources: {
    en,
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* eslint-disable-next-line no-undef */}
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider>
        <LoaderProvider>
          <Routing />
        </LoaderProvider>
      </ThemeProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
