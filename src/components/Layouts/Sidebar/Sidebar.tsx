import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../ROUTES';
import img from '../../../assets/img/logo.png';
import React from 'react';


const Sidebar: React.FC = () => {
  return (
    <nav>
      <div className='nav-container container'>
        <div className='content'>
          <div className='img'>
            <NavLink to={ROUTES.HOME}>
              <img src={img} alt="Connectmate" />
            </NavLink>
          </div>
          <ul>
            <li>
              <NavLink to={ROUTES.DASHBOARD} className="btn-type-1">Dashboard</NavLink>
            </li>
            {/* <li>
              <NavLink to={ROUTES.QUEUES} className="btn-type-1">Queues</NavLink>
            </li> */}
            <li>
              <NavLink to={ROUTES.AGENTS} className="btn-type-1">Agents</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.ALERTS} className="btn-type-1">Alerts</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.INSIGHTS} className="btn-type-1">Insights</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
