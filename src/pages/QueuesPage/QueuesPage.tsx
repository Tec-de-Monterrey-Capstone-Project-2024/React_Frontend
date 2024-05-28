import React, { useEffect, useState } from 'react';
import './styles.css';
import { InsightCard } from '../../components/Cards/InsightCard';
import { useNavigate } from "react-router-dom";

const QueuesPage: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const goToAgentList = () => {
        navigate("/agents");
    };

    const goToInsight = () => {
        navigate("/insights");
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className="queues-box">
            <div className="queues-columns">
                <div className="queue-column">
                    <div className="queues-titles">Queues</div>
                    <div className="queues-card">
                        <InsightCard title={"Reimbursements Queue"} description1={"Clients: 10"}
                                     description2={"Agents: 2"}
                                     color={"white"} borderColor={"red"} showBoxBorder={true} func={goToAgentList}/>
                    </div>
                    <div className="queues-card">
                        <InsightCard title={"Reservations Queue"} description1={"Clients: 2"}
                                     description2={"Agents: 2"}
                                     color={"white"} borderColor={"green"} showBoxBorder={true} func={goToAgentList}/>
                    </div>
                    <div className="queues-card">
                        <InsightCard title={"Cancellations Queue"} description1={"Clients: 4"}
                                     description2={"Agents: 2"}
                                     color={"white"} borderColor={"yellow"} showBoxBorder={true} func={goToAgentList}/>
                    </div>
                    <div className="queues-card">
                        <InsightCard title={"Receipts Queue"} description1={"Clients: 5"}
                                     description2={"Agents: 1"}
                                     color={"white"} borderColor={"red"} showBoxBorder={true} func={goToAgentList}/>
                    </div>
                </div>
                <div className="queue-column">
                    <div className="queues-titles">Insights</div>
                    <div className="queues-card">
                        <InsightCard title={"Reassignment"} description1={"Assign more agents to Reimbursements Queue"}
                                     color={"white"} borderColor={"red"} showBoxBorder={false} func={goToInsight}/>
                    </div>
                    <div className="queues-card">
                        <InsightCard title={"Reassignment"} description1={"Assign more agents to Cancellations Queue"}
                                     color={"white"} borderColor={"red"} showBoxBorder={false} func={goToInsight}/>
                    </div>
                    <div className="queues-card">
                        <InsightCard title={"Reassignment"} description1={"Assign more agents to Receipts Queue"}
                                     color={"white"} borderColor={"red"} showBoxBorder={false} func={goToInsight}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QueuesPage;