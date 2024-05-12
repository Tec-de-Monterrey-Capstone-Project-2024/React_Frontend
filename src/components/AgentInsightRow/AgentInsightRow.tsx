import React from 'react';
import './AgentInsightRow.css';
import {IAgentInsightRow} from "./types";
import classNames from "classnames";
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
const AgentInsightRow: React.FC<IAgentInsightRow> = ({ id, firstName, lastName, color }) => {
    const navigate = useNavigate();
    
    const rowClass = classNames({
        "row-box": true,
        "gray-bg": color === 'gray',
        "white-bg": color === 'white'
    });

    const handleShowMore = () => {
        navigate(`/dashboard/agent/${id}`, { state: { id } });
    };

    return (
        <div className = {rowClass}>
            <div className = "row-text">{firstName} {lastName}</div>
            <div>
                <div className="row-button">
                    <Button title={"Show more"} variant={"dark"} onClick={handleShowMore}>Show more</Button>
                </div>
            </div>
        </div>
    )
};

export default AgentInsightRow;