import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import {LoginForgot} from './../components/Forms/LoginForgot';

import { useAuth } from '../context/AuthContext';


const LoginPage = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to='/dashboard' />;
  }
  return <>
      <div >
        <div className='grid grid-rows-2 h-screen w-screen'>
          <LoginForgot title='Login' label='IAM Role' label2='Password' button='Login' link='Forgot Password' />
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

export default LoginPage;
