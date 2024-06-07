import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../context/AuthContext';

import { AuthLayout } from '../../../components/Layouts/AuthLayout';
import { AuthCard } from '../../../components/Cards/AuthCard';
import { ForgotForm } from '../../../components/Forms/ForgotForm';

import './styles.css';

const ForgotPage = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to='/dashboard' />;
  } 
  return <>
    <section className='auth'>
        <AuthLayout>
            <AuthCard>
              <ForgotForm />
            </AuthCard>
        </AuthLayout>
    </section>
  </>;
};

export default ForgotPage;
