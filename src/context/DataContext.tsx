import React, { createContext, useState, ReactNode, useContext } from 'react';
import { IUser } from '../services/user/types';
import { IInstance } from '../services/instance/types';

interface DataContextProps {
    isLogged: boolean,
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>,
    user: IUser | null,
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>,

    selectedInstance: string,
    setSelectedInstance: React.Dispatch<React.SetStateAction<string>>,

    selectedQueue: string,
    setSelectedQueue: React.Dispatch<React.SetStateAction<string>>,
}

export const DataContext = createContext<DataContextProps | null>(null);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [user, setUser] = useState<IUser | null>(null);

    const [selectedInstance, setSelectedInstance] = useState<string>("0");
    const [selectedQueue, setSelectedQueue] = useState<string>("all");
    
    const DataContextValue: DataContextProps = {
        isLogged,
        setIsLogged,
        user,
        setUser,

        selectedInstance,
        setSelectedInstance,
        selectedQueue,
        setSelectedQueue
    };
    
    return (
        <DataContext.Provider value={DataContextValue}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useDataContext must be used within a DataProvider");
    }
    return context;
};
