import React from 'react';
import {LoginForgot} from './../components/Forms/LoginForgot';

const LoginPage = () => {
  return <>
<<<<<<< Updated upstream
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
=======

      <div >
        <div className='grid grid-rows-2 h-screen w-screen'>
          <LoginForgot/>
          <div className='grid-span-1'>
            <img className='h-full w-full' src='/loginFoto.png' alt='login page image'/>
          </div>
          
          <div className='flex justify-center items-center'>
            <img className='grid-span-2' src='/logo.png' alt='logo image' />
          </div> 
        </div>
      </div>
>>>>>>> Stashed changes
  </>;
};

export default LoginPage;
