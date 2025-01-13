import React, { useEffect, useState } from 'react';
import { getSubscriptionsByUser } from '../utils/apiCalls';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

const SubscriptionsView = () => {
  // state variables for subscriptions
  const [Subscriptions, setSubscriptions] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    async function fetchSubscriptions() {
      let data = await getSubscriptionsByUser(localStorage.getItem('OPTIFLOW_PUBLIC_ID'));
      setSubscriptions(data.message);
      console.log(data);
    }
    fetchSubscriptions();
  }, []);

  return (

    
    <section>
      <h2>Subscriptions</h2>
      <div className="subscriptions-view">
        {Subscriptions.length > 0 ? (
          Subscriptions.map((sub, idx) => (
            <div
              key={idx}
              className="data-card"
              onClick={() => { nav(`/activity/${sub.activity_id}`); }}
              style={{ cursor: 'pointer' }}
            >
              <h3>{sub.activity_name}</h3>
              <p><strong>Description:</strong> {sub.activity_description}</p>
              <p><strong>Begin Date:</strong> {sub.subscription_begin_date}</p>
              <p><strong>End Date:</strong> {sub.subscription_end_date || 'ONGOING'}</p>
              <p><strong>Is Complete:</strong> {sub.subscription_is_complete ? 'Yes ✅' : 'No 🚫'}</p>
              <p><strong>Reflection:</strong> {sub.subscription_reflection || 'No Reflection'}</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>No subscriptions available.</p>
        )}
      </div>
    </section>
  );
};

export default SubscriptionsView;
