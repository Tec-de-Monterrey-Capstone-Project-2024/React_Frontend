import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../ROUTES';
import Select from '../Widgets/Select/Select';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState<string | null>(null);

  useEffect(() => {
    switch (location.pathname) {
      case '/queues':
        setTitle('Queues');
        setSubtitle(null);
        break;

      case '/dashboard':
        setTitle('Dashboard');
        setSubtitle(null);
        break;
        
      case '/account':
        setTitle('Account');
        setSubtitle(null);
        break;

      case '/alerts':
        setTitle('Alerts');
        setSubtitle(null);
        break;

      case '/agents':
        setTitle('Agents');
        setSubtitle(null);
        break;

      case '/insights':
        setTitle('Insights');
        setSubtitle(null);
        break;

      case '/dashboard/agent/2':
          setTitle('Dashboard');
          setSubtitle('- Jane Smith');
          break;
      
      case '/dashboard/agent/3':
        setTitle('Dashboard');
        setSubtitle('- Michael Johnson');
        break;

      default:
        setTitle(' ');
        setSubtitle(null);
        break;
    }
  }, [location]);

  return (
    <header>
      <div className='header-container container'>
        <div className='content'>
          <div className='title'>
            <h2>
              {title}
              {subtitle ? <small> {subtitle}</small> : <></>}
              <span className="aid-letter">.</span>
            </h2>
          </div>
          <div className='links'>
            <button title='bell' type='button' className='bell'>
              bell
            </button>
            <Select placeholder="Filters" color="green"></Select>
            <Link to={ROUTES.ACCOUNT} className='account'>
              account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
