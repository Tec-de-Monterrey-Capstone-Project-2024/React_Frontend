import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../ROUTES';
import AddAlert from '../components/Forms/AddAlert';

const HomePage: React.FC = () => {
  return <>
    <div>
      <AddAlert/>
    </div>
  </>;
};

export default HomePage;