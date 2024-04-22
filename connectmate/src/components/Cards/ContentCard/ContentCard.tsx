// ContentCard.tsx
import React from 'react';
import { ContentCardProps } from './types'; 
import './styles.css';

const ContentCard: React.FC<ContentCardProps> = ({ children }) => {
  return <div className="content-card">{children}</div>;
};

export default ContentCard;
