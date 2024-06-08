import React, { useEffect, useState, ChangeEvent } from 'react';
import { useDataContext } from '../../context/DataContext';

import { getAgents } from '../../services/agents/getAgents';
import { getMockAgents } from '../../services/agents/getMockAgents';
import { IAgent } from '../../services/agents/types';

import { ContentCard } from '../../components/Cards/ContentCard';
import { AgentsTable } from '../../components/DataDisplay/AgentsTable';
import { AgentInsightRow } from '../../components/AgentInsightRow';

import './styles.css';

const AgentsPage = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const { user, selectedQueueId } = useDataContext();
    const [agents, setAgents] = useState<IAgent[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                if (user) {
                    const res = await getMockAgents(user.instanceId, selectedQueueId);
                    setAgents(res.data);
                    
                }
            } catch (tcErr) {
                console.error(tcErr);
            }
            setLoading(false);
        }
        if (user) {
            fetchData();
        }
    }, [user, selectedQueueId]);

    return (
        <section className='agents'>
            <div className='section-container container'>
                <div className='agents-content'>
                <AgentInsightRow
                    id={0}
                    firstName={"Name"}
                    lastName= {null}
                    queueName={"Queue"}
                    color='light-gray'
                    button={false}
                />
                    <ContentCard>
                        {loading ? <p data-testid="txt-loading">Loading agents from Queue {selectedQueueId}...</p> : <AgentsTable agents={agents} />}
                    </ContentCard>
                </div>
            </div>
        </section>
    );
}

export default AgentsPage;