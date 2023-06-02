import React,{useState} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [token,setToken] = useState('');
    const [auth,setAuth] = useState(false);

    return <AppContext.Provider value={{auth,setAuth,token,setToken}}>{children}</AppContext.Provider>
};

export {AppContext,AppProvider}