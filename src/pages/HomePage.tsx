import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../ROUTES';

const HomePage: React.FC = () => {
  return <>
    <div>

      <Link to={ROUTES.AUTH}>Auth</Link>

    </div>
  </>;
};

export default HomePage;
