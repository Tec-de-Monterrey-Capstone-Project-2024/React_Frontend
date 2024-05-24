import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import { AuthProvider } from '../../context/AuthContext';
import { DataProvider } from '../../context/DataContext';

import Navbar from './Navbar';
import Sidebar from './Sidebar/Sidebar';

import '../../assets/styles/layout.css';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const location = useLocation();
    const isAuthPage = location.pathname.includes('auth');
    
    if (isAuthPage) {
        return (
            <AuthProvider>
                <main>{children}</main>
            </AuthProvider>
        );
    }

    return (
        <AuthProvider>
            <DataProvider>
                <div className='layout'>
                    <Sidebar />
                    <div className='panel'>
                        <Navbar />
                        <main>{children}</main>
                    </div>
                </div>
            </DataProvider>
        </AuthProvider>
    );
};

export default Layout;
