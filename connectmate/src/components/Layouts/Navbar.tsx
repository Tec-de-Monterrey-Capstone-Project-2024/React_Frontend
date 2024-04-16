import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header>
      <ul>
        Navbar
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </header>
  );
};

export default Navbar;
