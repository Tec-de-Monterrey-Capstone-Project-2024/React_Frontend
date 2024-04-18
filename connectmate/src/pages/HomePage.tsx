import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../ROUTES';
import { MetricCard } from '../components/MetricCard';

const HomePage: React.FC = () => {
  return <>
    <div>
      <MetricCard title="TU PUTA MADRE" subtitle="MURIO" metricUnit="n"/>
      <MetricCard title="TU PUTA MADRE" subtitle="MURIO" metricUnit="n"/>
      <h1>Welcome to the Home Page</h1>
      <Link to={ROUTES.AUTH}>auth</Link>
      <br />
      <Link to={ROUTES.DASHBOARD}>Dashb</Link>
    </div>
  </>;
};

export default HomePage;
