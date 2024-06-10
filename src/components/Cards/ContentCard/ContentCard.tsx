import React from 'react';
import { IContentCard } from './types';

import './styles.css';

const ContentCard: React.FC<IContentCard> = ({ testid, children }) => {
    return (
        <div data-testid={testid} className="content-card">
            <div className='content-card-container container'>
                {children}
            </div>
        </div>
    );
};

export default ContentCard;
