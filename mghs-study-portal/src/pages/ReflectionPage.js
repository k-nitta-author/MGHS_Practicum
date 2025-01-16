import React, { useEffect, useState } from 'react';

// get all reflections from the api in the db
async function get_reflections() {
  const URL = "";

  const request = await fetch(
    URL,
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
  );

  let reflection_data = request.json();

  console.log(await reflection_data);
}

const ReflectionPage = () => {
  // State variables for activity subscriptions and reflection text
  const [ActivitySubscriptions, setActivitySubscriptions] = useState([]);
  const [reflection, setReflection] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('');

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
      setReflection(data.message[0].reflection);

      console.log(data.message);
    }
    FetchActivitySubscriptions();
  }, []);

  // Handle reflection form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const URL = `https://mghs-backend.onrender.com/activity/${selectedActivity}/sub/reflection`;

    const response = await fetch(
      URL,
      {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          intern_id: localStorage.getItem('OPTIFLOW_PUBLIC_ID'),
          reflection: reflection
        })
      }
    );

    if (response.ok) {
      console.log('Reflection submitted successfully');
    } else {
      console.error('Failed to submit reflection');
    }
  };

  return (
    <section className="reflection-section">
      <header>
        <h1>Submit Reflection</h1>
        <p>
          Reflect on your experiences and share your thoughts with us.
        </p>
      </header>

      <section>
        <h2>Reflections</h2>

        <form onSubmit={handleSubmit} className="reflection-form">

        <label>Activity</label>

          <section className='reflection-form-radio-section'>



          {ActivitySubscriptions.map((activity) => (
            <div
              key={activity.activity_id}
              className='reflection-form-radio-wrapper'
              onClick={() => setSelectedActivity(activity.activity_id)}
            >
              <input
                type="radio"
                id={activity.activity_id}
                name="activity"
                value={activity.activity_id}
                checked={selectedActivity === activity.activity_id}
                onChange={(e) => setSelectedActivity(e.target.value)}
                className='activity-reflection-radio'
              />
              <label htmlFor={activity.activity_id}>{activity.activity_name}</label>
            </div>
          ))}
          </section>

          <label>Reflection</label>

          <textarea
            placeholder="Write your reflection"
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </section>
  );
};

export default ReflectionPage;
