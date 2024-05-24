import React from 'react';
import { IInsightRow } from './types';
import './styles.css'
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

const InsightRow: React.FC<IInsightRow> = ({ title, color }) => {

    const insightRow = classNames({
        "row-container": true,
        "gray-box": color === 'gray',
        "white-box": color === 'white',
    });

    const navigate = useNavigate();
    //to-do change link 
    const handleNavigate = () => {
        navigate('/insights-show');
    };

    return (
        <div className={insightRow}>
            <div className="text">{title}</div>
                <div className="button-text">
                    <Button onClick={handleNavigate} variant='dark' type={'button'}>Show more</Button>
                </div>
            </div>
        
    );
    
};

export default InsightRow;