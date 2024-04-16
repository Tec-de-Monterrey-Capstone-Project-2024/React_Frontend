import React, { ReactNode } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
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
