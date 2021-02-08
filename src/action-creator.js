function actionCreator(type = '') {
  return (payload = {}) => ({
    type,
    payload
  });
}

function asyncActionCreator(pending = '', success = '', error = '') {
  return {
    pending: actionCreator(pending),
    success: actionCreator(success),
    error: actionCreator(error)
  };
}

module.exports = {
  actionCreator,
  asyncActionCreator
};
