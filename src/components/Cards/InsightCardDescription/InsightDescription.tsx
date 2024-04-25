import React from 'react';
import './style.css';

interface InsightProps {
    title: string;
    message: string;
}

const Insight: React.FunctionComponent<InsightProps> = ({ title, message }: InsightProps) => {
    return (
        <div className="insight-container">
            <h2>{title}</h2>
            <span>{message}</span>
        </div>
    );
};

export default Insight;
