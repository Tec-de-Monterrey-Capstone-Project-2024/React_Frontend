import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../context/AuthContext';

import { AuthLayout } from '../../../components/Layouts/AuthLayout';
import { AuthCard } from '../../../components/Cards/AuthCard';
import { SignupForm } from '../../../components/Forms/SignupForm';
import './styles.css';


const SignupPage = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to='/dashboard' />;
  }
  return <>
    <section className='auth'>
      <AuthLayout>
        <AuthCard>
          <SignupForm />
        </AuthCard>
      </AuthLayout>
    </section>
  </>;
};

export default SignupPage;
