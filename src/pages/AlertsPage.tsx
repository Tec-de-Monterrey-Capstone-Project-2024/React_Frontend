import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../ROUTES';
import AlertsTable from '../components/Tables/AlertTable';

const HomePage: React.FC = () => {
  return <>
    <div>
      <AlertsTable/>
    </div>
  </>;
};

export default HomePage;