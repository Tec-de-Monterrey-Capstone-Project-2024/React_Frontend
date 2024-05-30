import React from 'react';
import { IAuthCard } from './types';

import './styles.css';

const AuthCard: React.FC<IAuthCard> = ({ children }) => {
    return (
        <div className="auth-card">
            <div className='auth-card-container container'>
                {children}
            </div>
        </div>
    );
};

export default AuthCard;