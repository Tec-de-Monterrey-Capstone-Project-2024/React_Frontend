import React from 'react';
import { IAgentsTable } from './types';
import { AgentInsightRow } from '../../AgentInsightRow';

import './styles.css';

const AgentsTable: React.FC<IAgentsTable> = ({ agents }) => {
    return (
        <div className='agents-table'>
            {agents.length > 0 ? (
                agents.map((agent) => (
                    <AgentInsightRow
                        id={agent.id}
                        firstName={agent.firstName} 
                        lastName= {agent.lastName}
                        color='gray'
                    />
                ))
            ) : <p>No agents found.</p>}
        </div>
    )
}

export default AgentsTable;
