import React, { ReactNode } from 'react';

interface ContentCardProps {
    children: ReactNode;
}

const ContentCard: React.FC<ContentCardProps> = ({ children }) => {
    return (
        <div className="content-card">
            {children}
        </div>
    );
};

export default ContentCard;
