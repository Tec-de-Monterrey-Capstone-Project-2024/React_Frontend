import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import {Register} from './../components/Forms/Register';

import { useAuth } from '../context/AuthContext';


const RegisterPage = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to='/dashboard' />;
  }
  return <>
      <div >
        <div className='grid grid-rows-2 h-screen w-screen'>
          <Register/>
          <div className='grid-span-1'>
            <img className='h-full w-full' src='/loginFoto.png' alt='login page image'/>
          </div>
          
          <div className='flex justify-center items-center'>
            <img className='grid-span-2' src='/logo.png' alt='logo image' />
          </div> 
        </div>
      </div>

  </>;
};

export default RegisterPage;