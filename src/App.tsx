import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layouts/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AgentDashboardPage from './pages/AgentDashboardPage/AgentDashboardPage';
import AgentsPage from './pages/AgentsPage/AgentsPage';
import ForgotPage from './pages/ForgotPage';
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
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<LoginPage />} />
          <Route path="/auth/forgot" element={<ForgotPage />} />
          <Route path="/queues" element={<QueuesPage/>} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/agent/:id" element={<AgentDashboardPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/insights-show" element={<AlertViewMore />} />
          <Route path="/insights" element={<InsightPage />} />
          {/* <Route component={NotFound} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
