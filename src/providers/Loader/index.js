import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Loader from 'components/Loader';
import reducer from './reducer';
import styles from './styles';

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
        <Box sx={styles.screenOverlay}>
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
