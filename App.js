import React from 'react';
import Header from './layout/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div id="div-subcontainer" className="div-subcontainer">
        <div className="content">
          <Dashboard />
          <button onClick={() => navigate('/form')} className="navigate-btn">Go to Form</button>
        </div>
      </div>
    </>
  );
}

export default App;
