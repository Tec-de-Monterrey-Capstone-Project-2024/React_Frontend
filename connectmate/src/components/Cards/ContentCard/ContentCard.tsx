import React from 'react';
import { IContentCard } from './types';

import './styles.css';

const ContentCard: React.FC<IContentCard> = ({ children }) => {
    return (
        <div className="content-card">
            {children}
        </div>
    );
};

export default ContentCard;
