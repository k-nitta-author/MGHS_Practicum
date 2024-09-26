import React from 'react';
import { Link } from 'react-router-dom';

const InternDashboard = () => {
  return (
    <div>
      <h1>Intern Dashboard</h1>
      <ul>
        <li><Link to="/tasks">View Tasks</Link></li>
        <li><Link to="/progress-tracking">Progress Tracking</Link></li>
        <li><Link to="/reflections">Submit Reflections</Link></li>
        <li><Link to="/subscriptions">View Subscriptions</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
    </div>
  );
};

export default InternDashboard;
