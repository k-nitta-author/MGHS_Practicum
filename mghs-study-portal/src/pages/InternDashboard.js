import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// InternDashboard component
const InternDashboard = () => {

  // Progress data for the intern
  const [activitySubscriptions, setActivitySubscriptions] = useState([]);
  const [activityMetadata, setActivityMetadata] = useState([]);

  // Fetch activity subscriptions on component mount
  useEffect(() => {
    async function FetchActivitySubscriptions() {
      const URL = `https://mghs-backend.onrender.com/activity/sub/${localStorage.getItem('OPTIFLOW_PUBLIC_ID')}`;

      const userActivitySubscriptions = await fetch(
        URL,
        {
          method: "GET",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        }
      );

      let data = await userActivitySubscriptions.json();

      setActivitySubscriptions(data.message);
      setActivityMetadata(data.summary);

      console.log(data.summary);
    }
    FetchActivitySubscriptions();
  }, []);


  return (
    <div className="page-container">
      <header>
      <h1>Welcome Intern</h1>
      <p>
        Track your progress and stay updated
      </p>
      <img src=''/>
      </header>
      
      <section className="page-section">

          <h2>Current Progress</h2>
          <section className="block-section">
            <section className="block">
              <h2>Activities Completed</h2>
              <strong>
                {activityMetadata.no_complete_activities}
              </strong>
            </section>

            <section className="block">
              <h2>Activities Done</h2>
              <strong>
              {activityMetadata.no_of_subscriptions}
              </strong>
            </section>
          </section>
      </section>


    <section  className='page-section'>
      <h2>
        Subscribed Activities
      </h2>
      <section className='block'>


      {activitySubscriptions.map((activity, index) => {

        return(

          <section key={index}>
          <h2>{activity.activity_name}</h2>

          <p><strong>Status: </strong>{activity.subscription_is_complete ? "Complete" : "Incomplete"}</p>

          <p><strong>Deadline: </strong>{activity.subscription_end_date}</p>

          <p>{activity.activity_description}</p>
        </section>

        )
          
        })}

      </section>
    
    </section>

      <section className='page-section'>
      <h2>Relevant Links</h2>

      <section className="task-section-links">
      <ul>
          <li><Link to="/tasks">View Tasks</Link></li>
          <li><Link to="/progress-tracking">Progress Tracking</Link></li>
          <li><Link to="/reflections">Submit Reflections</Link></li>
          <li><Link to="/subscriptions">View Subscriptions</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </section>
    </section>

    </div>
  );
};

export default InternDashboard;
