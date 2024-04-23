import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../ROUTES';
import { InsightCard } from '../components/Cards/InsightCard';
//import { MetricCard } from '../components/MetricCard';

const HomePage: React.FC = () => {
  return <>
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to={ROUTES.AUTH}>auth</Link>
      <br />
      <Link to={ROUTES.DASHBOARD}>Dashb</Link>
      <InsightCard title='Reassignments' description= 'Assign more agents to cancellations' color='white' borderColor='green' showBoxBorder={true}></InsightCard>
    </div>
  </>;
};

export default HomePage;
