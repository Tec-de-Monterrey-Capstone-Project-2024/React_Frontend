import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getAgentMetrics } from '../../services/metrics/getAgentMetrics';
import { IMetric } from '../../services/metrics/types';

import MetricsData, { MetricData } from '../../config/MetricsData';

import { ContentCard } from '../../components/Cards/ContentCard';
import { GaugeChart } from '../../components/DataDisplay/GaugeChart';
import { Pie } from '../../components/DataDisplay/PieChart';
import { MetricCard } from '../../components/Cards/MetricCard';

import './styles.css';

const AgentDashboardPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [metrics, setMetrics] = useState<IMetric[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (id) {
        const res = await getAgentMetrics(id);
        console.log(res);
        if (res.status >= 200 && res.status < 300) {
          setMetrics(res.data);
        } else {
          setMetrics(null);
        }
      }
      setLoading(false);
    }

    fetchData();

    // const intervalId = setInterval(fetchData, 5000);
    // return () => clearInterval(intervalId);
  }, [id]);

  return (
    <section className='agent-dashboard'>
      <div className='container'>
        <div className='agent-content'>
          <div className='column'>
            <h2>KPIs</h2>
            {loading ? <p>Loading...</p> : (metrics ? (
              <div className='metrics'>
                {metrics.map(metric => {
                  const { metric_info_code, value } = metric;
                  const { name, min, max, unit, positive_upside } = MetricsData[metric_info_code];
                
                  return (
                    <MetricCard
                      title={name}
                      subtitle={'No se que se ponga aqui'}
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
            <div className='insights'>
            {loading ? <p>Loading...</p> : metrics && metrics.map(metric => {
              const { metric_info_code, value } = metric;
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AgentDashboardPage;