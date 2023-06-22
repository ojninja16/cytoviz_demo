'use client'
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({
    fileId: '',
    setFileId: () => {}
});

export const GlobalContextProvider = ({ children }) => {
    const [fileId, setFileId] = useState('');

    return (
    <GlobalContext.Provider value={{ fileId, setFileId }}>
        {children}
    </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
