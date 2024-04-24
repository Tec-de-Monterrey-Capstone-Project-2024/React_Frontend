import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../ROUTES';
import Select from '../components/Select/Select';
//import { MetricCard } from '../components/MetricCard';

const HomePage: React.FC = () => {
    return(
        <div>
            <p>Home</p>
            <div className='flex'>
                <div className='flex-initial w-64 m-36'>
                    <Select placeholder="Filters" color="green"></Select>
                </div>
                <div className='flex-initial'>
                    <Select color="gray"></Select>
                </div>
            </div>
        </div>
  );
};

export default HomePage;
