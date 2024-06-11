import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import { ILayout } from './types';

import { AuthProvider } from '../../../context/AuthContext';
import { ErrorProvider } from '../../../context/ErrorContext';
import { DataProvider } from '../../../context/DataContext';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar/Sidebar';

import '../../../assets/styles/layout.css';
import '../../../assets/styles/buttons.css';

const Layout: React.FC<ILayout> = ({ children }) => {
    const location = useLocation();
    const isAuthPage = location.pathname.includes('auth');
    
    if (isAuthPage) {
        return (
            <AuthProvider>
                <ErrorProvider>
                    <DataProvider>
                        <main>{children}</main>
                    </DataProvider>
                </ErrorProvider>
            </AuthProvider>
        );
    }

    return (
        <AuthProvider>
            <ErrorProvider>
                <DataProvider>
                    <div className='layout'>
                        <Sidebar />
                        <div className='panel'>
                            <Navbar />
                            <main>{children}</main>
                        </div>
                    </div>
                </DataProvider>
            </ErrorProvider>
        </AuthProvider>
    );
};

export default Layout;
