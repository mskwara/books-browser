import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import reducer from './reducer';
import Loader from 'components/Loader';

const initialState = {
  isLoading: false,
};

const LoaderContext = React.createContext();

const LoaderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return (
    <LoaderContext.Provider value={value}>
      {children}
      {state.isLoading && (
        <Box
          sx={{
            zIndex: 999,
            width: '100vw',
            height: '100vh',
            backgroundColor: (theme) => theme.palette.overlay,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
          }}
        >
          <Loader />
        </Box>
      )}
    </LoaderContext.Provider>
  );
};

LoaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoaderProvider;

export { LoaderContext };
