import React,{useState} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {



    return <AppContext.Provider value={{input,setInput,error,setError,success,setSuccess}}>{children}</AppContext.Provider>
};

export {AppContext,AppProvider}