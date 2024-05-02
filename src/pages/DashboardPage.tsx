import React, { useEffect, useState } from 'react'

import { getMetrics } from '../services/metrics/getMetrics';
import { IMetrics } from '../services/metrics/types';

import { ContentCard } from '../components/Cards/ContentCard';
import { GaugeChart } from '../components/DataDisplay/GaugeChart';
import { Pie } from '../components/DataDisplay/PieChart';

const DashboardPage = () => {
  const [metrics, setMetrics] = useState<IMetrics>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await getMetrics();
      console.log(res.data[0]);
      setMetrics(res.data[0]);
      setLoading(false);
    }

    fetchData();

    // const intervalId = setInterval(fetchData, 5000);
    // return () => clearInterval(intervalId);
}, []);

  return (
    <>
    <ContentCard>
      <h1>Dashboard Page</h1>
      <br />
      {loading ? <p></p> : <GaugeChart min={0} max={100} value={metrics!.value} />}
    </ContentCard>
    <Pie id={metrics!.id} value={metrics!.value} metric={metrics!.metric_info_code} />
    </>
  )
}

export default DashboardPage;