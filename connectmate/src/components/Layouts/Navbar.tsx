import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../ROUTES';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [title, setTitle] = useState('');

  useEffect(() => {
    switch (location.pathname) {
      case '/queues':
        setTitle('Queues');
        break;

      case '/dashboard':
        setTitle('Dashboard');
        break;
        
      case '/account':
        setTitle('Account');
        break;

      case '/alerts':
        setTitle('Alerts');
        break;

      case '/agents':
        setTitle('Agents');
        break;

      case '/recommendations':
        setTitle('Recommendations');
        break;

      default:
        setTitle(' ');
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
              <span className="aid-letter">.</span>
            </h2>
          </div>
          <div className='links'>
            <button title='bell' type='button' className='bell'>
              bell
            </button>
            <button title='filter' type='button' className='filter'>
              filter
            </button>
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
