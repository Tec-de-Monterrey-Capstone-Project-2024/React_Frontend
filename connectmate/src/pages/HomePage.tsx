import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../ROUTES';
import Select from '../components/Layouts/Select/Select';
//import { MetricCard } from '../components/MetricCard';

const HomePage: React.FC = () => {
    return(
        <div>
            <p>Home</p>
            <Select placeholder="Filters" color="grey"></Select>
        </div>
    
  );
};

export default HomePage;
