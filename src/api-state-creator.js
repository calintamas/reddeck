function getInitialState() {
  return {
    pending: false,
    error: false,
    success: false
  };
}

function apiStateCreator(newState = {}) {
  return {
    ...getInitialState(),
    ...newState
  };
}

module.exports = { apiStateCreator };
