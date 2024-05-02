import { Link } from 'react-router-dom';
import { ROUTES } from '../../../ROUTES';
import img from '../../../assets/img/logo.png';
import React from 'react';


const Sidebar: React.FC = () => {
  return (
    <nav>
      <div className='nav-container container'>
        <div className='content'>
          <div className='img'>
            <Link to={ROUTES.HOME}>
              <img src={img} alt="Connectmate" />
            </Link>
          </div>
          <ul>
            <li>
              <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
            </li>
            <li>
              <Link to={ROUTES.QUEUES}>Queues</Link>
            </li>
            <li>
              <Link to={ROUTES.AGENTS}>Agents</Link>
            </li>
            <li>
              <Link to={ROUTES.ALERTS}>Alerts</Link>
            </li>
            <li>
              <Link to={ROUTES.INSIGHTS}>Insights</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
