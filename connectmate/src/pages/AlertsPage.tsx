import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../ROUTES';
import AlertsTable from '../components/Tables/AlertsTable';
//import { MetricCard } from '../components/MetricCard';

const HomePage: React.FC = () => {
  return <>
    <div>
      <AlertsTable/>
    </div>
  </>;
};

export default HomePage;