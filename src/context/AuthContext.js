import React,{createContext} from 'react';

export const AuthContext = createContext({
    value:123
});

export const AuthProvider = ({children}) => {
    return (<AuthContext.Provider value>{children}</AuthContext.Provider>)
};
