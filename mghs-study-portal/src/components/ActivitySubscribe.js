import React, { useEffect, useState } from 'react';

// include this in places where you need to be able to subscribe to an activity
const ActivitiesSubscribe = ({ activity_id, fetchSubscriptionFunction }) => {
  // initialize stateful data
  const [activity, setActivity] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  let act_id = activity_id;

  useEffect(() => {
    if (!act_id) {
      console.error('Activity ID is undefined');
    }

    // fetch the activity data
    fetchSubscriptionFunction(setSubscribed);
  }, [act_id, fetchSubscriptionFunction]);

  // subscribe to the activity
  async function Subscribe() {
    if (!act_id) {
      console.error('Activity ID is undefined');
      return;
    }

    const url = `https://mghs-backend.onrender.com/activity/${act_id}/subscribe`;

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ intern_id: localStorage.getItem('OPTIFLOW_PUBLIC_ID') }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSubscribed(true); // Set subscribed state to true
      setModalVisible(false); // Hide the modal on successful subscription
    } catch (error) {
      console.error('There was a problem with the subscription request:', error);
    }
  }

  // unsubscribe from the activity
  async function Unsubscribe() {
    if (!act_id) {
      console.error('Activity ID is undefined');
      return;
    }

    const url = `https://mghs-backend.onrender.com/activity/${act_id}/unsubscribe`;

    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ intern_id: localStorage.getItem('OPTIFLOW_PUBLIC_ID') }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log(await response.json());
      setSubscribed(false); // Set subscribed state to false
    } catch (error) {
      console.error('There was a problem with the unsubscription request:', error);
    }
  }

  // show the modal
  function ShowModal() {
    setModalVisible(true);
  }

  // cancel the action
  function Cancel() {
    setModalVisible(false);
  }

  return (
    <section className="activities-subscribe">
      {/* Header Section */}
      <header>
        <h2>Subscription</h2>
      </header>

      {/* Main Section */}
      <main>
        {/* Subscribe/Unsubscribe Button */}
        <button onClick={ShowModal}>
          {subscribed ? 'Unsubscribe' : 'Subscribe'}
        </button>

        {/* Modal for Subscription Confirmation */}
        {modalVisible && (
          <div className="modal">
            <div className="modal-content">
              <h3>{subscribed ? 'Unsubscribe' : 'Subscribe'} Confirmation</h3>
              <p>Are you sure you want to {subscribed ? 'unsubscribe from' : 'subscribe to'} this activity?</p>
              <button onClick={subscribed ? Unsubscribe : Subscribe}>Confirm</button>
              <button onClick={Cancel}>Cancel</button>
            </div>
          </div>
        )}
      </main>
    </section>
  );
};

export default ActivitiesSubscribe;
