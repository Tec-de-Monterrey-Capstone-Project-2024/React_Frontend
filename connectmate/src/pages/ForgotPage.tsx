import React from 'react';
import ForgotPassword from '../components/Forms/ForgotPassword';

const ForgotPage = () => {
  return <>

      <div >
        <div className='grid grid-rows-2 h-screen w-screen'>
          <ForgotPassword />
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

export default ForgotPage;