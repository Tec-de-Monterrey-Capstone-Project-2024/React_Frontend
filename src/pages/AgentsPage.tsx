import React, { useEffect, useState } from 'react';

import { getAgents } from '../services/agents/getAgents';
import { IAgent } from '../services/agents/types';

import { ContentCard } from '../components/Cards/ContentCard';
import { AgentInsightRow } from '../components/AgentInsightRow';

const AgentsPage = () => {
    const [agents, setAgents] = useState<IAgent[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getAgents();
            setAgents(res);
        }

        fetchData();
    }, []);
    return (
        <>
            <ContentCard>
                <div className='agent-table'>
                    {agents && agents.map((agent, index) => (
                        <AgentInsightRow key={index} title={agent.first_name} color='gray' />
                    ))}
                </div>
            </ContentCard>
        </>
    );
}

export default AgentsPage;