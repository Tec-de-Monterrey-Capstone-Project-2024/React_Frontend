import React from 'react';
import { IAuthLayout } from './types';
import img from '../../../assets/img/logo.png'
import loginFoto from '../../../../public/loginFoto.png'

const AuthLayout: React.FC<IAuthLayout> = ({ children }) => {
  return (
    <div className='grid grid-rows-2 h-screen w-screen relative'>
      <div className='grid-span-1'>
        <img className='h-full w-full' src={loginFoto} alt='login page image'/>
      </div>
      {children}
      <div className='flex justify-center items-end pb-5'>
        <img className='grid-span-2' src={img} alt='logo image' />
      </div>
    </div>
  )
}

export default AuthLayout;