const statsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  // let newState = Object.assign({}, oldState);
  switch (action.type) {
    default:
      return oldState;
  }
};

export default statsReducer;
