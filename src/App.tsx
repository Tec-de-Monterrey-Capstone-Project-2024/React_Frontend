import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import Layout from './components/Layouts/Layout';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './context/PrivateRoute';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AgentDashboardPage from './pages/AgentDashboardPage/AgentDashboardPage';
import AgentsPage from './pages/AgentsPage/AgentsPage';

import AccountPage from './pages/AccountPage/AccountPage';
import AlertsPage from './pages/AlertsPage';
import QueuesPage from './pages/QueuesPage/QueuesPage';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to='/auth' />} />
          <Route path="/auth" element={<LoginPage />} />

          <Route path='/' element={<PrivateRoute />}>
            <Route path="/home" element={<HomePage/>} />
            <Route path="/queues" element={<QueuesPage/>} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/agent/:id" element={<AgentDashboardPage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/alerts" element={<AlertsPage />} />
          </Route>
          {/* <Route component={NotFound} /> */}
        </Routes>
      </Layout>
      </AuthProvider>
    </Router>
  );
};

export default App;
