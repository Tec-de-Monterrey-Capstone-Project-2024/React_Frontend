import React from 'react';
import './AgentInsightRow.css';
import {IAgentInsightRow} from "./types";
import classNames from "classnames";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../Button';
const AgentInsightRow: React.FC<IAgentInsightRow> = ({ id, firstName, lastName, queueName, color, button }) => {
    const navigate = useNavigate();
    
    const rowClass = classNames({
        "row-box": true,
        "gray-bg": color === 'gray',
        "light-gray-bg": color === 'light-gray',
        "white-bg": color === 'white'
    });

    const handleShowMore = () => {
        navigate(`/dashboard/agent/${id}`, { state: { id } });
    };

    return (
        <div className = {rowClass} data-testid={"agent-insight-row-wrapper"}>
            <div className="row-text" data-testid={"agent-insight-row-name"}>{firstName} {lastName!}</div>
            {queueName && <div className="row-text" data-testid={"agent-insight-row-queue"}>{queueName}</div>}
            <div className="row-button" data-testid={"agent-insight-row-button"}>
                {button && <Link to={`/dashboard/agent/${id}`} id={id} className='btn-type-5'>Show more</Link>}
                {/* <Button title={"Show more"} variant={"dark"} onClick={handleShowMore}>Show more</Button> */}
            </div>
        </div>
    )
};

export default AgentInsightRow;