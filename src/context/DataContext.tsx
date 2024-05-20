import React, { createContext, useState, ReactNode, useContext } from 'react';
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
    selectedInstance: IInstance | null,
    setSelectedInstance: React.Dispatch<React.SetStateAction<IInstance | null>>,

    selectedQueueId: string,
    setSelectedQueueId: React.Dispatch<React.SetStateAction<string>>,
    selectedQueue: IQueue | null,
    setSelectedQueue: React.Dispatch<React.SetStateAction<IQueue | null>>,
}

export const DataContext = createContext<DataContextProps | null>(null);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [user, setUser] = useState<IUser | null>(null);

    const [selectedInstanceId, setSelectedInstanceId] = useState<string>("0");
    const [selectedInstance, setSelectedInstance] = useState<IInstance | null>(null);
    
    const [selectedQueueId, setSelectedQueueId] = useState<string>("all");
    const [selectedQueue, setSelectedQueue] = useState<IQueue | null>(null);
    
    const DataContextValue: DataContextProps = {
        isLogged,
        setIsLogged,
        user,
        setUser,

        selectedInstanceId,
        setSelectedInstanceId,
        selectedInstance,
        setSelectedInstance,

        selectedQueueId,
        setSelectedQueueId,
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
