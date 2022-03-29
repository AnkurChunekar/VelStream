const initialLikeState = {
  likeData: [22],
};

const likeReducer = (state, action) => {
  switch (action.type) {
    case "LIKE":
      return state;
    default:
      return state;
  }
};

export { initialLikeState, likeReducer };
