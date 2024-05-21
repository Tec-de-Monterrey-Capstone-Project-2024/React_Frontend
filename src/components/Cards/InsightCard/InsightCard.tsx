import React from 'react';
import { IInsightCard } from './types';
import './style.css'
import classNames from 'classnames';
import { Button } from '../../Button';

const InsightCard: React.FC<IInsightCard> = ({ title, description1, description2, color, borderColor, showBoxBorder, func }) => {
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
                {description1}
            </div>
            <div className="description">
                {description2}
            </div>
            <div className="insight-button">
                <Button title={"Show more"} className="w-full" variant={"dark"} onClick={func}>Show more</Button>
            </div>
        </div>
    );
};

export default InsightCard;
