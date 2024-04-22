import React from 'react';
import './style.css';

interface InsightProps {
    title: string;
    message: string;
}
const Insight: React.FC<InsightProps> = ({ title, message }: InsightProps) => {
    return (
        <div className="insight-container">
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    );
};

export default Insight;
