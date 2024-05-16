import React, { useEffect, useState, ChangeEvent } from 'react';

import { getAgents } from '../../services/agents/getAgents';
import { IAgent } from '../../services/agents/types';

import { ContentCard } from '../../components/Cards/ContentCard';
import { AgentsTable } from '../../components/DataDisplay/AgentsTable';

import './styles.css';

const AgentsPage = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [queue, setQueue] = useState<number>(1);
    const [agents, setAgents] = useState<IAgent[]>([]);
    
    const changeQueue = (event: ChangeEvent<HTMLSelectElement>) => {
        setQueue(parseInt(event.target.value));
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await getAgents(queue);
                console.log('Agents data:', res.data);
                setAgents(res.data);
            } catch (tcErr) {
                console.error(tcErr);
            }
            setLoading(false);
        }
        fetchData();
    }, [queue]);

    return (
        <section className='agents'>
            <div className='section-container container'>
                <div className='agents-content'>
                    <select id="queue" title='queue' value={queue} onChange={changeQueue} className='btn-type-2'>
                        <option value="1">Queue 1</option>
                        <option value="2">Queue 2</option>
                        <option value="3">Queue 3</option>
                    </select>
                    <ContentCard>
                        {loading ? <p>Loading agents from Queue {queue}...</p> : <AgentsTable agents={agents} />}
                    </ContentCard>
                </div>
            </div>
        </section>
    );
}

export default AgentsPage;