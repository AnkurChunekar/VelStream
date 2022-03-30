import { createContext, useContext, useReducer } from "react";
import { watchLaterReducer, initialWatchLaterState } from "../reducers";

const defaultValue = initialWatchLaterState;

const WatchLaterContext = createContext(defaultValue);

const WatchLaterProvider = ({ children }) => {

    const [watchLaterState, watchLaterDispatch] = useReducer(watchLaterReducer, initialWatchLaterState);

    return (
        <WatchLaterContext.Provider value={{ watchLaterDispatch, watchLaterState }} >
            {children}
        </WatchLaterContext.Provider>
    );
}

const useWatchLater = () => useContext(WatchLaterContext);

export { useWatchLater, WatchLaterProvider };
