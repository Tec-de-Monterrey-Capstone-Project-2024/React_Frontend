import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { IUser } from '../services/user/types';

interface DataContextProps {
    user: IUser | null,
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>,

    selectedQueueId: string,
    setSelectedQueueId: React.Dispatch<React.SetStateAction<string>>,
}

export const DataContext = createContext<DataContextProps | null>(null);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [user]);


    const [selectedQueueId, setSelectedQueueId] = useState<string>( localStorage.getItem('selectedQueueId') || "all" );
    useEffect(() => {
        localStorage.setItem('selectedQueueId', selectedQueueId);
    }, [selectedQueueId]);
    
    const DataContextValue: DataContextProps = {
        user,
        setUser,

        selectedQueueId,
        setSelectedQueueId,
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