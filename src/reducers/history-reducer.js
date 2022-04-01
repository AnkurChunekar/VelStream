const initialHistoryState = {
    historyData: [],
  };
  
  const historyReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_HISTORY":
        return { historyData: action.payload };
      case "RESET":
        return initialHistoryState;
      default:
        return state;
    }
  };
  
  export { initialHistoryState, historyReducer };
