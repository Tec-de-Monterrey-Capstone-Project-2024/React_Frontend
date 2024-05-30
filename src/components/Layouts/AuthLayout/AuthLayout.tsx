import React from 'react';
import { IAuthLayout } from './types';

const AuthLayout: React.FC<IAuthLayout> = ({ children }) => {
  return (
    <div className='grid grid-rows-2 h-screen w-screen'>
      <div className='grid-span-1'>
        <img className='h-full w-full' src='/loginFoto.png' alt='login page image'/>
      </div>
      {children}
      <div className='flex justify-center items-end pb-5'>
        <img className='grid-span-2' src='/logo.png' alt='logo image' />
      </div>
    </div>
  )
}

export default AuthLayout;