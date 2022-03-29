const initialLikeState = {
  likeData: [],
};

const likeReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_LIKES":
      return { likeData: action.payload };
    case "RESET":
      return initialLikeState;
    default:
      return state;
  }
};

export { initialLikeState, likeReducer };
