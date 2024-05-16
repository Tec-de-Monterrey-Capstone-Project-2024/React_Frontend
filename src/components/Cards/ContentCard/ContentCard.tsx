import React from 'react';
import { IContentCard } from './types';

import './styles.css';

const ContentCard: React.FC<IContentCard> = ({ children }) => {
    return (
        <div className="content-card">
            <div className='content-card-container container'>
                {children}
            </div>
        </div>
    );
};

export default ContentCard;
