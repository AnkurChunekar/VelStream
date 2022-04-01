import { createContext, useContext, useReducer } from "react";
import { historyReducer, initialHistoryState } from "../reducers"

const defaultValue = {};

const HistoryContext = createContext(defaultValue);

const HistoryProvider = ({ children }) => {
  const [historyState, historyDispatch] = useReducer(historyReducer, initialHistoryState);

  return (
    <HistoryContext.Provider value={{ historyState, historyDispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);

export { useHistory, HistoryProvider };
