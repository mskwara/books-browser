const actions = {
  SHOW: 'LOADER/SHOW',
  HIDE: 'LOADER/HIDE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SHOW: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case actions.HIDE: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default reducer;

export { actions };
