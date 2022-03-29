import { createContext, useContext, useReducer } from "react";
import { likeReducer, initialLikeState } from "../reducers"

const defaultValue = {};

const LikeContext = createContext(defaultValue);

const LikeProvider = ({ children }) => {
  const [likeState, likeDispatch] = useReducer(likeReducer, initialLikeState);

  return (
    <LikeContext.Provider value={{ likeState, likeDispatch }}>
      {children}
    </LikeContext.Provider>
  );
};

const useLike = () => useContext(LikeContext);

export { useLike, LikeProvider };
