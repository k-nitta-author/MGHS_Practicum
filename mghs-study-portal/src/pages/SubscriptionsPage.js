import React, { useState } from 'react';
import { useEffect } from 'react';

import SubscriptionsView from '../components/subscriptionView';

const SubscriptionsPage = () => {

  const URL = "https://mghs-backend.onrender.com/task"

  const [taskSubscriptions, setTaskSubscriptions] = useState([]);

  return (
    <>
      <header>
        <h1>Task Subscriptions</h1>

        <p>
          View and manage your subscriptions to various tasks and activities.
        </p>
      </header>
      
      {/* Add subscription management components */}

      <main>
        <SubscriptionsView/>
      </main>
    </>
  );
};

export default SubscriptionsPage;
