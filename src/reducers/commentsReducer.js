const initialCommentsState = { comments: [] };

const commentsReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_COMMENTS":
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};

export { commentsReducer, initialCommentsState };
