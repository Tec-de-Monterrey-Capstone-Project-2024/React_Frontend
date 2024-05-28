import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layouts/Layout';
import PrivateRoute from './context/PrivateRoute';

import HomePage from './pages/HomePage';
import LoginPage from './pages/AuthPages/LoginPage';
import SignupPage from './pages/AuthPages/SignupPage';
import ForgotPage from './pages/AuthPages/ForgotPage';

import DashboardPage from './pages/DashboardPage';
import AgentDashboardPage from './pages/AgentDashboardPage/AgentDashboardPage';
import AgentsPage from './pages/AgentsPage/AgentsPage';
import AccountPage from './pages/AccountPage/AccountPage';
import AlertsPage from './pages/AlertsPage';
import AlertViewMore from './pages/AlertViewMore';

import QueuesPage from './pages/QueuesPage/QueuesPage';
import InsightPage  from './pages/InsightPage/InsightPage';



const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to='/dashboard' />} />
          <Route path="/auth" element={<Navigate to='/auth/login' />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignupPage />} />
          <Route path="/auth/forgot" element={<ForgotPage />} />
          
          <Route path='/' element={<PrivateRoute />}>
            <Route path="/queues" element={<QueuesPage/>} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/agent/:id" element={<AgentDashboardPage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/alerts" element={<AlertsPage />} />
            <Route path="/insights" element={<InsightPage />} />
            <Route path="/insights-show" element={<AlertViewMore />} />
          </Route>
          
          {/* <Route component={NotFound} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
