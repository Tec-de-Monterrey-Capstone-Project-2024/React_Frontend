import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import { DataProvider } from '../../context/DataContext';

import Navbar from './Navbar';
import Sidebar from './Sidebar/Sidebar';

import '../../assets/styles/layout.css';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const location = useLocation();
    const isAuthPage = location.pathname === '/auth';
    const isForgotPage = location.pathname === '/auth/forgot';
    
    if (isAuthPage || isForgotPage) {
        return (
            <>
                <main>{children}</main>
            </>
        );
    }

    return (
        <DataProvider>
            <div className='layout'>
                <Sidebar />
                <div className='panel'>
                    <Navbar />
                    <main>{children}</main>
                </div>
            </div>
        </DataProvider>
    );
};

export default Layout;
