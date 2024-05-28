import React, { useEffect, useState } from 'react';
import { getAgentMetrics } from '../services/metrics/getAgentMetrics';
import { IMetric } from '../services/metrics/types';
import MetricsData from '../config/MetricsData';
import { GaugeChart } from '../components/DataDisplay/GaugeChart';
import { Pie } from '../components/DataDisplay/PieChart';

const DashboardPage = () => {

  // const [metrics, setMetrics] = useState<IMetric[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await getAgentMetrics("1");
  //       console.log(res.data);
  //       if (Array.isArray(res.data)) {
  //         setMetrics(res.data);
  //       } else {
  //         console.error('Expected an array of metrics, but received:', res.data);
  //       }
  //     } catch (error) {
  //       console.error('Failed to fetch metrics:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <br />
      {/* {metrics.map(metric => {
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
      })} */}
    </>
  )
}

export default DashboardPage;
