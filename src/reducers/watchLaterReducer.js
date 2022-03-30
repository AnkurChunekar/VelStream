const initialWatchLaterState = { watchLaterData: [22] };

const watchLaterReducer = (state, action) => {
    switch (action.type) {
        case "RESET":
            return { watchLaterData: [] };
        default:
            return state;
    }
}

export { watchLaterReducer, initialWatchLaterState };
