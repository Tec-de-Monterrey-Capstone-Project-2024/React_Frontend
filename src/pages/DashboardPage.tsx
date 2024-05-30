import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useDataContext } from '../context/DataContext';

import MetricsData from '../config/MetricsData';

import { getQueueInsights } from '../services/insights/getQueueInsights';
import { getQueueCounts } from '../services/queues/getQueueCounts';
import { describeQueue } from '../services/queues/describeQueue';
import { getQueueMetrics } from '../services/metrics/getQueueMetrics';

import { IMetric } from '../services/metrics/types';
import { IInsight } from '../services/insights/types';
import { MetricCard } from '../components/Cards/MetricCard';
import { IQueueCounts } from '../services/queues/types';
import { IQueue } from '../services/queues/types';
import InsightCard  from "../components/Cards/InsightCard/InsightCard";

const DashboardPage = () => {
  const navigate = useNavigate();

  const { user, arn, selectedQueueId } = useDataContext();

  const [queue, setQueue] = useState<IQueue[] | null>(null);
  const [loadingQueue, setLoadingQueue] = useState<Boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoadingQueue(true);

      if (selectedQueueId !== "all" && user) {
        const res = await describeQueue(user.instanceId, selectedQueueId);
        // console.log(res.data);
        setQueue(res.data);
      }

      setLoadingQueue(false);
    }

    fetchData();
  }, [user, selectedQueueId]);

  const [queueCounts, setQueueCounts] = useState<IQueueCounts[] | null>(null);
  const [loadingQueueCounts, setLoadingQueueCounts] = useState<Boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoadingQueueCounts(true);

      const res = await getQueueCounts(user!.instanceId, selectedQueueId);
      setQueueCounts(res.data);

      setLoadingQueueCounts(false);
    }
    if (user && selectedQueueId !== 'all') {
      fetchData();
    }
  }, [user, selectedQueueId]);

  const [metrics, setMetrics] = useState<IMetric[] | null>(null);
  const [loadingMetrics, setLoadingMetrics] = useState<Boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoadingMetrics(true);
      if (arn !== '' && selectedQueueId !== 'all') {
        const res = await getQueueMetrics(arn, selectedQueueId);
        console.log(res);
        if (res.status >= 200 && res.status < 300) {
          const transformedMetrics = Object.entries(res.data).map(([key, value], index) => ({
            id: index,
            metric_info_code: key,
            value
          }));
          setMetrics(transformedMetrics);
        } else {
          setMetrics(null);
        }
      }
      setLoadingMetrics(false);
    }
    if (arn !== '' && selectedQueueId !== 'all') {
      fetchData();
    } else {
      setMetrics(null);
    }
  }, [arn, selectedQueueId]);
  
  const [insights, setInsights] = useState<IInsight[] | null>(null);
  const [loadingInsights, setLoadingInsights] = useState<Boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoadingInsights(true);
      const res = await getQueueInsights(selectedQueueId);
      setInsights(res.data);

      setLoadingInsights(false);
    }
    fetchData();
  }, [selectedQueueId]);
  
  const goToAgentList = () => {
    navigate("/agents");
  };

  return (
    <section className='dashboard home'>
      <div className='container'>
        {selectedQueueId !== "all" && (
          <div className="queues-card-dashboard">
            <InsightCard title={(loadingQueue ? "Loading queue name..." : (queue?.at(0)?.name ?? "Queue"))} description1={"Clients: " + (loadingQueueCounts ? "Loading clients..." : (queueCounts?.at(0)?.contacts ?? "0"))}
                         description2={"Agents: " + (loadingQueueCounts ? "Loading agents..." : (queueCounts?.at(0)?.agents ?? "0"))} color={"white"} borderColor={queueCounts?.at(0)?.color ?? "green"}
                         showBoxBorder={true} func={goToAgentList} btn={false} />
          </div>
        )}
        <div className='dashboard-content'>
          <div className='column'>
            <h2>KPIs</h2>
            {loadingMetrics ? <p>Loading...</p> : ((metrics && metrics.length > 0) ? (
                <div className='metrics'>
                  {metrics.map(metric => {
                    const {id, metric_info_code, value} = metric;
                    const {name, min, max, unit, positive_upside} = MetricsData[metric_info_code];

                    return (
                        <MetricCard
                          key={id}
                            title={name}
                            subtitle={''}
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
            {loadingInsights ? <p>Loading...</p> : ((insights && insights.length > 0) ? (
                <div className="insights">
                  {insights.map(insight => (
                      <InsightCard
                          key={insight.id}
                          title={insight.insightName}
                          description1={insight.insightSummary}
                          color={"white"}
                          borderColor={insight.insightSeverity}
                          showBoxBorder={true}
                          func={() => {
                            navigate(`/insights/${insight.id}`);
                          }}
                          btn={true}
                      />
                  ))}
                </div>
            ) : (
                <p>No insights found.</p>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardPage;
