import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../ROUTES';

const Navbar: React.FC = () => {
  return (
    <header>
      <div className='header-container container'>
        <div className='content'>
          <div className='title'>
            <h2>Queues</h2>
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
