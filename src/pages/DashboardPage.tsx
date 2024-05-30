import { IMetric } from '../services/metrics/types';
import MetricsData, { MetricData } from '../config/MetricsData';
import InsightData from '../config/insightDummyData.json'
import { getGeneralMetrics } from '../services/metrics/getGeneralMetrics';
import { MetricCard } from '../components/Cards/MetricCard';
import React, { useEffect, useState } from 'react'
import InsightCard  from "../components/Cards/InsightCard/InsightCard";
import {IInsightCard} from "../components/Cards/InsightCard/types";
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const [metrics, setMetrics] = useState<IMetric[] | null>(null);
  const [insights, setInsights] = useState<IInsightCard[] | null>(null)
  const [loading, setLoading] = useState<Boolean>(true);

  const navigate = useNavigate();

  const goToAgentList = () => {
    navigate("/agents");
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const res = await getGeneralMetrics();
      console.log(res.data);
      setMetrics(res.data);

      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <section className='agent-dashboard'>
      <div className='container'>
        <div className="queues-card-dashboard">
          <InsightCard title={"Reimbursements Queue"} description1={"Clients: 10"}
                       description2={"Agents: 2"}
                       color={"white"} borderColor={"red"} showBoxBorder={true} func={goToAgentList}/>
        </div>
        <div className='agent-content'>
          <div className='column'>
            <h2>KPIs</h2>
            {loading ? <p>Loading...</p> : (metrics ? (
                <div className='metrics'>
                  {metrics.map(metric => {
                    const {id, metric_info_code, value} = metric;
                    const {name, min, max, unit, positive_upside} = MetricsData[metric_info_code];

                    return (
                        <MetricCard
                            title={name}
                            subtitle={'No se que se ponga aqui'}
                            minValue={min}
                            maxValue={max}
                            value={value}
                            unit={unit}
                            positive_upside={positive_upside}
                            onClick={() => {
                              navigate("general-metrics/" + id);
                            }}
                        />
                    );
                  })}
                </div>
            ) : (
                <p>No metrics found</p>
            ))}
          </div>
          <div className='column'>
            <h2>Insights</h2>
            {loading ? <p>Loading...</p> : (InsightData ? (
                <div className="insights">
                  {InsightData.map(insight => (
                      <InsightCard
                          key={insight.title}
                          title={insight.title}
                          description1={insight.description1}
                          color={insight.color}
                          borderColor={insight.borderColor}
                          showBoxBorder={insight.showBoxBorder === "true"}
                          func={() => {
                            console.log(`More info about ${insight.title}`);
                          }}
                      />
                  ))}
                </div>
            ) : (
                <p>No insights found</p>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardPage;
