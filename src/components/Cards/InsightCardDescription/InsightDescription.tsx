import React from 'react';
import './style.css';

interface InsightProps {
    title: string;
    message: string;
}

const Insight: React.FunctionComponent<InsightProps> = ({ title, message }: InsightProps) => {
    return (
        <div className="insight-container rounded-lg">
            <h2>{title}</h2>
            <hr className="border-t-4 border-grey mb-4" />
            <span>{message}</span>
        </div>
    );
};

export default Insight;
