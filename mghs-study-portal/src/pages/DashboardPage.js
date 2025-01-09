import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import InternDashboard from './InternDashboard';
import AdminDashboard from './AdminDashboard';

const DashboardPage = () => {
  
  const nav = useNavigate();
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("OPTIFLOW_IS_ADMIN") === "true");

  useEffect(() => {

  }, []);

  return (    
    <>
      {isAdmin ? <AdminDashboard /> : <InternDashboard />}
    </>
  );
};

export default DashboardPage;
