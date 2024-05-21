import React, { useEffect, useState, ChangeEvent } from 'react';

import { useDataContext } from '../../context/DataContext';

import { getAgents } from '../../services/agents/getAgents';
import { IAgent } from '../../services/agents/types';

import { ContentCard } from '../../components/Cards/ContentCard';
import { AgentsTable } from '../../components/DataDisplay/AgentsTable';

import './styles.css';

const AgentsPage = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const { selectedInstanceId, selectedQueueId } = useDataContext();
    const [agents, setAgents] = useState<IAgent[]>([]);
    
    // const changeQueue = (event: ChangeEvent<HTMLSelectElement>) => {
    //     setQueue(parseInt(event.target.value));
    // };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await getAgents(selectedQueueId);
                console.log(res);
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
                    {/* <select id="queue" title='queue' value={queue} onChange={changeQueue} className='btn-type-2'>
                        <option value="1">Queue 1</option>
                        <option value="2">Queue 2</option>
                        <option value="3">Queue 3</option>
                    </select> */}
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