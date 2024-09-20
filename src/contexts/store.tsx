"use client"

import { createContext, useContext, Dispatch, SetStateAction, useState, useEffect } from "react";

interface ContextProps {
    files: any[],
    setFiles: Dispatch<SetStateAction<any[]>>
}

const GlobalContext = createContext<ContextProps>({
    files: [], 
    setFiles: (): any[] => []
})

export const GlobalContextProvider = ({ children }: any) => {

    const [files, setFiles] = useState<any>([]);
    
    return (
        <GlobalContext.Provider value={{ files, setFiles }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);