import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layouts/Layout';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import './assets/styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<LoginPage />} />
          <Route path="/queues" element={<LoginPage />} />
          <Route path="/dashboard" element={<LoginPage />} />
          <Route path="/auth" element={<LoginPage />} />
          {/* <Route component={NotFound} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
