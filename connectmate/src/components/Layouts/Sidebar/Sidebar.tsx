import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/img/Logo-de-Amazon.webp';


const Sidebar: React.FC = () => {
  return (
    <nav>
      <img src={img} alt="" />
      <ul>
        Sidebar
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/queues">Queues</Link>
        </li>
        <li>
          <Link to="/agents">Agents</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Sidebar;
