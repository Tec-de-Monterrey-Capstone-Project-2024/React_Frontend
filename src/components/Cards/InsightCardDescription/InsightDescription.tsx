import { IInsightDescription } from './types';
import React from 'react';
import './style.css';

const InsightDescription: React.FunctionComponent<IInsightDescription> = ({ title, message }: IInsightDescription) => {
    return (
        <div className="insight-container">
            <h2>{title}</h2>
            <span>{message}</span>
        </div>
    );
};

export default InsightDescription;
