import React from 'react';
import './AgentInsightRow.css';
import {IAgentInsightRow} from "./types";
import classNames from "classnames";

const AgentInsightRow: React.FC<IAgentInsightRow> = ({
                                   title,
                                   color,
                               }) => {
    const rowClass = classNames({
        "row-box": true,
        "gray-bg": color === 'gray',
        "white-bg": color === 'white'
    });
    return (
        <div className = {rowClass}>
            <div className = "row-text">
                {title}
            </div>
            <div>

            </div>
        </div>
    )
};

export default AgentInsightRow;