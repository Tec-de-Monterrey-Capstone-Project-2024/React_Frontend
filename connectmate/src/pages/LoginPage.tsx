import React from 'react';
import LoginForm from '../components/Forms/LoginForm';

const LoginPage = () => {
  return <>
      <div className='relative'>
        <LoginForm />
        <div className='grid grid-rows-2 h-screen w-screen'>
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
