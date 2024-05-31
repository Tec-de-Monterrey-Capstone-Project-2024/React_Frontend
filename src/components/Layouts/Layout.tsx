import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import { AuthProvider } from '../../context/AuthContext';
import { ErrorProvider } from '../../context/ErrorContext';
import { DataProvider } from '../../context/DataContext';

import Navbar from './Navbar';
import Sidebar from './Sidebar/Sidebar';

import '../../assets/styles/layout.css';
import SocketConnectionState from '../Socket/SocketConnectionState';
import { SocketProvider, useSocketContext } from '../../context/SocketContext';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const location = useLocation();
    const isAuthPage = location.pathname.includes('auth');    
    if (isAuthPage) {
        return (
            <AuthProvider>
                <DataProvider>
                  <SocketProvider>
                    <main>{children}</main>
                  </SocketProvider>
                </DataProvider>
            </AuthProvider>
        );
    }

    return (
        <AuthProvider>
            <DataProvider>
              <SocketProvider>
                <div className='layout'>
                      <Sidebar />
                      <div className='panel'>
                          <Navbar />
                          <SocketConnectionState />
                          <main>{children}</main>
                      </div>
                  </div>
              </SocketProvider>
            </DataProvider>
        </AuthProvider>
    );
};

export default Layout;
