import React from 'react';
import { IInsightRow } from './types';
import './styles.css'
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

const InsightRow: React.FC<IInsightRow> = ({ id, title, color }) => {

    const insightRow = classNames({
        "row-container": true,
        "gray-box": color === 'gray',
        "white-box": color === 'white',
    });

    const navigate = useNavigate();
    //to-do change link 
    const handleNavigate = () => {
        navigate(`/insights/${id}`);
    };

    return (
        <div className={insightRow} data-testid={"wrapper-insight-row"} >
            <div className="text insight-row-text" data-testid={"insight-row-title"}>{title}</div>
                <div className="button-text" data-testid={"insight-row-button"}>
                    <Button onClick={handleNavigate} variant='dark' type={'button'} className='insight-view-more-btn'>Show more</Button>
                </div>
            </div>
    );
};

export default InsightRow;