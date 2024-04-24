import React from 'react';
import { IInsightCard } from './types';
import './style.css'
import classNames from 'classnames';
const InsightCard: React.FC<IInsightCard> = ({ title, description, color, borderColor, showBoxBorder }) => {

    const card = classNames({
        "box-container": true,
        "gray-box": color === 'gray',
        "white-box": color === 'white',
        "box-border": showBoxBorder,
        "green-border": borderColor === 'green',
        "red-border": borderColor === 'red',
        "yellow-border": borderColor === 'yellow',
    });

    return (
        <div className={card}>
            <div className="header">
                <h1>{title}</h1>
            </div>
            <div className="description">
                {description}
            </div>
            <div className="button">
                <button>Show more</button>
            </div>
        </div>
    );
};

export default InsightCard;