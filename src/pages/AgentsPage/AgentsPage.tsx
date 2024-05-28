import React, { useEffect, useState, ChangeEvent } from 'react';
import { useDataContext } from '../../context/DataContext';

import { getAgents } from '../../services/agents/getAgents';
import { IAgent } from '../../services/agents/types';

import { ContentCard } from '../../components/Cards/ContentCard';
import { AgentsTable } from '../../components/DataDisplay/AgentsTable';
import { AgentInsightRow } from '../../components/AgentInsightRow';

import './styles.css';

const AgentsPage = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const { selectedInstanceId, selectedQueueId } = useDataContext();
    const [agents, setAgents] = useState<IAgent[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await getAgents(selectedInstanceId, selectedQueueId);
                console.log(res.data);
                setAgents(res.data);
            } catch (tcErr) {
                console.error(tcErr);
            }
            setLoading(false);
        }
        fetchData();
    }, [selectedInstanceId, selectedQueueId]);

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
                    {selectedInstanceId === "0" ? <p>Please select an instance.</p> : (
                            loading ? <p>Loading agents from Queue {selectedQueueId}...</p> : <AgentsTable agents={agents} />
                        )}
                    </ContentCard>
                </div>
            </div>
        </section>
    );
}

export default AgentsPage;