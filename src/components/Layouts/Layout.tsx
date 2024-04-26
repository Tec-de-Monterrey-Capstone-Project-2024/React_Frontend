import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

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
        <>
            <div className='layout'>
                <Sidebar />
                <div className='panel'>
                    <Navbar />
                    <main>{children}</main>
                </div>
            </div>
        </>
    );
};

export default Layout;
