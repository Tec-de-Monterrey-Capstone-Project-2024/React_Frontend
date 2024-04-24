import React from 'react';
import { IInsightCard } from './types';
import './style.css'
import classNames from 'classnames';
import Button from '../../Button/Button';
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
                <Button variant = "dark"></Button>
            </div>
        </div>
    );
};

export default InsightCard;