const initialWatchLaterState = { watchLaterData: [] };

const watchLaterReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_WATCHLATER":
          return { watchLaterData: action.payload };
        case "RESET":
          return initialWatchLaterState;
        default:
          return state;
      }
}

export { watchLaterReducer, initialWatchLaterState };
