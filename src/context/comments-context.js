import { createContext, useContext, useReducer } from "react";
import { commentsReducer, initialCommentsState } from "../reducers";

const defaultValue = initialCommentsState;

const CommentsContext = createContext(defaultValue);

const CommentsProvider = ({ children }) => {

    const [commentsState, commentsDispatch] = useReducer(commentsReducer, initialCommentsState);

    return (
        <CommentsContext.Provider value={{ commentsDispatch, commentsState }} >
            {children}
        </CommentsContext.Provider>
    );
}

const useComments = () => useContext(CommentsContext);

export { useComments, CommentsProvider };
