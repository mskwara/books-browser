import { useContext } from 'react';
import { LoaderContext } from 'providers/Loader';
import { actions } from 'providers/Loader/reducer';

const useLoader = () => {
  const context = useContext(LoaderContext);

  if (context === undefined) {
    throw new Error('useLoader must be used within a LoaderContext');
  }

  const showLoader = () =>
    context.dispatch({
      type: actions.SHOW,
    });

  const hideLoader = () =>
    context.dispatch({
      type: actions.HIDE,
    });

  return {
    showLoader,
    hideLoader,
  };
};

export default useLoader;
