import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getAgentMetrics } from '../services/metrics/getAgentMetrics';
import { IMetric } from '../services/metrics/types';

import MetricsData, { MetricData } from '../config/MetricsData';

import { ContentCard } from '../components/Cards/ContentCard';
import { GaugeChart } from '../components/DataDisplay/GaugeChart';
import { Pie } from '../components/DataDisplay/PieChart';

const AgentDashboardPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const [metrics, setMetrics] = useState<IMetric[] | null>(null);

  useEffect(() => {
    console.log(id);
    const fetchData = async () => {
      setLoading(true);
      if (id) {
        const res = await getAgentMetrics(id);
        console.log(res.data);
        setMetrics(res.data);
      }
      setLoading(false);
    }

    fetchData();

    // const intervalId = setInterval(fetchData, 5000);
    // return () => clearInterval(intervalId);
  }, [id]);

  return (
    <>
      <div className='container-doremi'>
        <div className='divider-doremi'>
          <div className='charts-container'>
            <h2>KPIs</h2>
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
            {/* {metrics ? <>
              <GaugeChart min={0} max={100} value={0} />
            </> : <>
              <GaugeChart min={0} max={100} value={metrics} />
            </>} */}
            {/* {loading ? <p>Loading...</p> : <GaugeChart min={0} max={100} value={metrics.value} />}
            <Pie id={metrics!.id} value={metrics!.value} metric={metrics!.metric_info_code} /> */}
          </div>
          <div className='insights-container'>
            <h2>Insights</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default AgentDashboardPage;