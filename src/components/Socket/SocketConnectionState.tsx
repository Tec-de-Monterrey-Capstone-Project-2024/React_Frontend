import React, { useEffect } from 'react';
import { useSocketContext } from '../../context/SocketContext';

const SocketConnectionState: React.FC = () => {
  const {isConnected, connect, events} = useSocketContext();

  useEffect(() => {
    connect();
  }, []);
  
  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <p>State: {' ' + isConnected}</p>
  )
}

export default SocketConnectionState;