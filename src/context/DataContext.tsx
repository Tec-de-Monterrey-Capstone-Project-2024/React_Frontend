import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { IUser } from '../services/user/types';
import { IInstance } from '../services/instance/types';
import { IQueue } from '../services/queue/types';

interface DataContextProps {
    isLogged: boolean,
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>,
    user: IUser | null,
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>,

    selectedInstanceId: string,
    setSelectedInstanceId: React.Dispatch<React.SetStateAction<string>>,

    selectedQueueId: string,
    setSelectedQueueId: React.Dispatch<React.SetStateAction<string>>,
}

export const DataContext = createContext<DataContextProps | null>(null);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [user, setUser] = useState<IUser | null>(null);

    const [selectedInstanceId, setSelectedInstanceId] = useState<string>( localStorage.getItem('selectedInstanceId') || "0" );
    const [selectedQueueId, setSelectedQueueId] = useState<string>( localStorage.getItem('selectedQueueId') || "all" );

    useEffect(() => {
        localStorage.setItem('selectedInstanceId', selectedInstanceId);
    }, [selectedInstanceId]);
    useEffect(() => {
        localStorage.setItem('selectedQueueId', selectedQueueId);
    }, [selectedQueueId]);
    
    const DataContextValue: DataContextProps = {
        isLogged,
        setIsLogged,
        user,
        setUser,

        selectedInstanceId,
        setSelectedInstanceId,

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
