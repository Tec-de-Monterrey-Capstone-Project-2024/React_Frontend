import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return <>
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/auth">auth</Link>
    </div>
  </>;
};

export default HomePage;
