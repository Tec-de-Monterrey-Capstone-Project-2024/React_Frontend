import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import AlertsTable from '../components/Tables/AlertTable';
//import { MetricCard } from '../components/MetricCard';

const HomePage: React.FC = () => {
  return <>
    <div>
      <AlertsTable/>
    </div>
  </>;
};

export default HomePage;