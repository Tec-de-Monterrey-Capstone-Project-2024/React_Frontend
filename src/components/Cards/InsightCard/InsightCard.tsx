import React from 'react';
import { IInsightCard } from './types';
import './style.css'
import classNames from 'classnames';

const InsightCard: React.FC<IInsightCard> = ({ title, description1, description2, color, borderColor, showBoxBorder, func, btn }) => {
    const card = classNames({
        "box-container": true,
        "gray-box": color === 'gray',
        "white-box": color === 'white',
        "box-border": showBoxBorder,
        "green-border": borderColor === 'green' || borderColor === "LOW" || borderColor === "UNKNOWN",
        "red-border": borderColor === 'red' || borderColor === "HIGH" || borderColor === "CRITICAL",
        "yellow-border": borderColor === 'yellow' || borderColor === "MEDIUM",
    });

    return (
        <div className={card} data-testid={"wrapper-insight-card"}>
            <div className="header" data-testid={"insight-card-title"}>
                <h1>{title}</h1>
            </div>
            <div className="description" data-testid={"insight-card-description1"}>
                {description1}
            </div>
            <div className="description" data-testid={"insight-card-description2"}>
                {description2}
            </div>
            {btn && <div className="insight-button" data-testid={"insight-card-button"}>
                <button className='btn-type-6' onClick={func}>View more</button>
            </div>}
        </div>
    );
};

export default InsightCard;
