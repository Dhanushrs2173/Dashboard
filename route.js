import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Header from './layout/Header/Header';
import Form from './pages/form/form';
import Dashboard from './pages/Dashboard/Dashboard';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <>
          <Header />
          <App />
          </>
          } />
        <Route path="/form" 
        element={
          <>
          <Header />
          <Form />
          </>
        } />
        <Route path="/Dashboard" element={
          <>
          <Header />
          <Dashboard />
          </>
        } />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
