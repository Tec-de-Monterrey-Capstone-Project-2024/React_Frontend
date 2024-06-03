import { io } from "socket.io-client";

import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { socket } from "../services/insights/socket";
import { IMetric } from "../services/metrics/types";

interface SocketContextProps {
    isConnected: boolean,
    events: any,

    connect: () => void;
    disconnect: () => void;
}

export const SocketContext = createContext<SocketContextProps | null>(null);

export const SocketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
    const [events, setEvents] = useState<IMetric[]>([]);
    
    const connect = () => {
        socket.connect();
        setIsConnected(true);
    }
    
    const disconnect = () => {
        socket.disconnect();
        setIsConnected(false);
    }

    const onEvent = (value: IMetric) => {
        setEvents((prev: IMetric[]) => [...prev, value]);
        console.log("A message was received.")
        console.log(events);
    }

    useEffect(() => {
        socket.on('connect', connect);
        socket.on('disconnect', disconnect);
        socket.on('add_insight', onEvent);

        return () => {
            socket.off('connect', connect);
            socket.off('disconnect', disconnect);
            socket.off('add_insight', onEvent);
        }
    }, [])
    
    const SocketContextValue: SocketContextProps = {
        isConnected,
        events,

        connect,
        disconnect,
    };
    
    return (
        <SocketContext.Provider value={SocketContextValue}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocketContext = () => {
    const context = useContext(SocketContext);
    if (!context) {
        throw new Error("useSocketContext must be used within a DataProvider");
    }
    return context;
};
