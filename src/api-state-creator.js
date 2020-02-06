const getInitialState = () => {
  return {
    pending: false,
    error: false,
    success: false
  };
};

const apiStateCreator = (newState = {}) => {
  return {
    ...getInitialState(),
    ...newState
  };
};

export { apiStateCreator };
