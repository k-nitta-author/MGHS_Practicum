import React, { useState } from 'react';
import { useEffect } from 'react';


const SubscriptionsPage = () => {

  const URL = "https://mghs-backend.onrender.com/task"

  const [taskSubscriptions, setTaskSubscriptions] = useState([]);

  return (
    <div>
      <h1>Task Subscriptions</h1>
      <p>View and manage your subscriptions to various tasks and activities.</p>
      {/* Add subscription management components */}
    </div>
  );
};

export default SubscriptionsPage;
