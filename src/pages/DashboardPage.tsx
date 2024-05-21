import React, { useEffect, useState } from 'react'

import { getAgentMetrics } from '../services/metrics/getAgentMetrics';
import { IMetric } from '../services/metrics/types';

import MetricsData, { MetricData } from '../config/MetricsData';

import { ContentCard } from '../components/Cards/ContentCard';
import { GaugeChart } from '../components/DataDisplay/GaugeChart';
import { Pie } from '../components/DataDisplay/PieChart';

const DashboardPage = () => {
  const [metrics, setMetrics] = useState<IMetric[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAgentMetrics("1");
      console.log(res.data);
      setMetrics(res.data);
    }

  fetchData();
  }, []);

  return (
    <>
        <br />
        {metrics && metrics.map(metric => {
          const { metric_info_code, value, id } = metric;
          const { name, min, max, graph } = MetricsData[id];
          
          return (
            <div key={id}>
              <b>{name}</b>
                {graph === 'Gauge' ? (
                  <GaugeChart min={min} max={max} value={value} />
                ) : (
                  <Pie value={value} metric={metric_info_code} />
                )}
              </div>
            );
          })}

    </>
  )
}

export default DashboardPage;