import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../context/AuthContext';

import { AuthLayout } from '../../../components/Layouts/AuthLayout';
import { AuthCard } from '../../../components/Cards/AuthCard';
import LoginForm from '../../../components/Forms/LoginForm/LoginForm';

import '../styles.css';

const LoginPage = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to='/dashboard' />;
  } 
  return <>
    <section className='auth'>
        <AuthLayout>
            <AuthCard>
                <LoginForm />
            </AuthCard>
        </AuthLayout>
    </section>
  </>;
};

export default LoginPage;
