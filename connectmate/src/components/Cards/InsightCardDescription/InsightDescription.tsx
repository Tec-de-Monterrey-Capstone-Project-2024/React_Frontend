/*
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
*/

import './style.css';
import React from 'react';

interface InsightDescriptionProps {
    title: string;
    message1: string;
    message2: string;
    containerStyle?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
}

const InsightDescription: React.FC<InsightDescriptionProps> = ({
    title,
    message1,
    message2,
    containerStyle,
    titleStyle,
}) => {
    return (
        <div className="insight-container" style={containerStyle}>
            <h2 style={titleStyle}>{title}</h2>
            <div>
                <p>{message1}</p>
                <p>{message2}</p>
            </div>
        </div>
    );
};

export default InsightDescription;