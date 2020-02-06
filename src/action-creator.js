const actionCreator = (type = '') => (payload = {}) => {
  return {
    type,
    payload
  };
};

const asyncActionCreator = (pending = '', success = '', error = '') => {
  return {
    pending: actionCreator(pending),
    success: actionCreator(success),
    error: actionCreator(error)
  };
};

export { actionCreator, asyncActionCreator };
