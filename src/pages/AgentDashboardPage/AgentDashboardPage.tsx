import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useDataContext } from '../../context/DataContext';

import { getAgentMetrics } from '../../services/metrics/getAgentMetrics';
import { getAgentInsights } from '../../services/insights/getAgentInsights';
import { IMetric } from '../../services/metrics/types';
import { IInsight } from '../../services/insights/types';

import MetricsData from '../../config/MetricsData';

import { GaugeChart } from '../../components/DataDisplay/GaugeChart';
import { Pie } from '../../components/DataDisplay/PieChart';
import { MetricCard } from '../../components/Cards/MetricCard';
import { InsightCard } from '../../components/Cards/InsightCard';
import './styles.css';

const AgentDashboardPage: React.FC = () => {
  const { agentId } = useParams<{ agentId: string }>();
  const navigate = useNavigate();

  const { arn } = useDataContext();

  const [metrics, setMetrics] = useState<IMetric[] | null>(null);
  const [loadingMetrics, setLoadingMetrics] = useState(true);
  const [insights, setInsights] = useState<IInsight[] | null>(null);
  const [loadingInsights, setLoadingInsights] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      setLoadingMetrics(true);
      if (arn !== '' && agentId) {
        const res = await getAgentMetrics(arn, agentId);
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

    const fetchInsights = async () => {
      setLoadingInsights(true);
      if (agentId) {
        const res = await getAgentInsights(agentId);
        if (res.status >= 200 && res.status < 300) {
          setInsights(res.data);
        } else {
          setInsights(null);
        }
      }
      setLoadingInsights(false);
    }

    fetchMetrics();
    fetchInsights();
  }, [arn, agentId]);

  return (
    <section className='agent-dashboard'>
      <div className='container'>
        <div className='agent-content'>
          <div className='column'>
            <h2>KPIs</h2>
            {loadingMetrics ? <p>Loading...</p> : (metrics ? (
              <div className='metrics'>
                {metrics.map(metric => {
                  const { id, metric_info_code, value } = metric;
                  const metricData = MetricsData[metric_info_code];
                  if (!metricData) return null;

                  const { name, min, max, unit, positive_upside } = metricData;
                
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
                      onClick={() => {}}
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
              <div className='insights'>
                {insights.map(insight => {
                  const { id, insightName, insightSummary } = insight;
                
                  return (
                    <InsightCard
                      key={id}
                      title={insightName}
                      description1={insightSummary}
                      color={'white'}
                      borderColor={'red'}
                      showBoxBorder={true}
                      func={() => {
                        navigate(`/insights/${insight.id}`);
                      }}
                      btn={true}
                    />
                  );
                })}
              </div>
            ) : (
              <p>No insights found</p>
            ))}

            {/* <div className='insights'>
            {loadingMetrics ? <p>LoadingMetrics...</p> : metrics && metrics.map(metric => {
              const { id, metric_info_code, value } = metric;
              const { name, min, max, graph } = MetricsData[metric_info_code];
              
              return (
                <div key={id} className='chart'>
                  <h5>{name}</h5>
                    {graph === 'Gauge' ? (
                      <GaugeChart min={min} max={max} value={value} />
                    ) : (
                      <Pie value={value} metric={metric_info_code} />
                    )}
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AgentDashboardPage;