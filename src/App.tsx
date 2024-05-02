import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layouts/Layout';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ForgotPage from './pages/ForgotPage';
import AccountPage from './pages/AccountPage';
import AlertsPage from './pages/AlertsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<LoginPage />} />
          <Route path="/auth/forgot" element={<ForgotPage />} />
          <Route path="/queues" element={<div>Queues</div>} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/agents" element={<div>Agents</div>} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          {/* <Route component={NotFound} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;