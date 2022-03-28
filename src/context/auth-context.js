import { createContext, useContext, useReducer } from "react";
import { authReducer, initialAuthState } from "../reducers";

const defaultValue = initialAuthState;

const AuthContext = createContext(defaultValue);

const AuthProvider = ({ children }) => {

    const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

    return (
        <AuthContext.Provider value={{ authDispatch, authState }} >
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
