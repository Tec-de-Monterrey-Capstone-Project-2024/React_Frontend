import React, { createContext, useState, ReactNode } from 'react';
import { IUser } from '../services/user/types';

interface DataContextProps {
    isLogged: boolean,
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>,
    user: IUser | null,
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>,

    exampleData: string;
    setExampleData: React.Dispatch<React.SetStateAction<string>>;
}

export const DataContext = createContext<DataContextProps | null>(null);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [user, setUser] = useState<IUser | null>(null);

    const [exampleData, setExampleData] = useState<string>('Initial data');
    
    const DataContextValue: DataContextProps = {
        isLogged,
        setIsLogged,
        user,
        setUser,
        exampleData,
        setExampleData,
    };
    
    return (
        <DataContext.Provider value={DataContextValue}>
            {children}
        </DataContext.Provider>
    );
};
