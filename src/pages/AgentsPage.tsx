import React, { useEffect, useState } from 'react';

import { getAgents } from '../services/agents/getAgents';
import { IAgent } from '../services/agents/types';

import { ContentCard } from '../components/Cards/ContentCard';
import { AgentInsightRow } from '../components/AgentInsightRow';

const AgentsPage = () => {
    const [agents, setAgents] = useState<IAgent[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAgents();
                console.log('Agents data:', res.data);
                setAgents(res.data);
            } catch (tcErr) {
                console.error(tcErr);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <ContentCard>
                <div className='agents-table'>
                    {agents.map((agent) => (
                        <AgentInsightRow 
                        id={agent.id}
                        firstName={agent.firstName} 
                        lastName= {agent.lastName}
                        color='gray' />
                    ))}
                </div>
            </ContentCard>
        </>
    );
}

export default AgentsPage;