import React, { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';

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
  const [errors, setErrors] = useState({});
  const is_admin = localStorage.getItem('OPTIFLOW_IS_ADMIN') === "true";

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

      setActivitySubscriptions(data.message || []);
      setReflection(data.message[0]?.subscription_reflection || '');

      console.log(data.message);
    }
    FetchActivitySubscriptions();
  }, []);

  // validate form inputs
  const validate = () => {
    let tempErrors = {};
    if (!selectedActivity) tempErrors.selectedActivity = "Activity selection is required.";
    if (!reflection) tempErrors.reflection = "Reflection is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle reflection form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

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

  if (is_admin) {
    return (
      <section className="reflection-section">
        <header>
          <h1>Reflections</h1>
          <p>View and manage intern reflections.</p>
        </header>

        <nav>
          <BackButton/>
        </nav>
        <p>Reflections are written by interns.</p>
        {/* TODO: Implement admin view for reflections */}
      </section>
    );
  }

  return (
    <section className="reflection-section">
      <header>
        <h1>Submit Reflection</h1>
        <p>
          Reflect on your experiences and share your thoughts with us.
        </p>
      </header>

        <nav>
          <BackButton/>
        </nav>

      <section>
        <h2>Reflections</h2>

        <form onSubmit={handleSubmit} className="reflection-form">

        <label>Activity</label>

          <section className='reflection-form-radio-section'>

          {ActivitySubscriptions.map((activity) => (
            <div
              key={activity.activity_id}
              className='reflection-form-radio-wrapper'
              onClick={() => {
                setSelectedActivity(activity.activity_id);
                setReflection(activity.subscription_reflection);
              }}
            >
              <input
                type="radio"
                id={activity.activity_id}
                name="activity"
                value={activity.activity_id}
                checked={selectedActivity === activity.activity_id}
                onChange={(e) => {
                  setSelectedActivity(e.target.value);
                  setReflection(activity.subscription_reflection);
                }}
                className='activity-reflection-radio'
              />
              <label htmlFor={activity.activity_id}>{activity.activity_name}</label>
            </div>
          ))}
          </section>
          {errors.selectedActivity && <p style={{ color: 'red' }}>{errors.selectedActivity}</p>}

          <label>Reflection</label>

          <textarea
            placeholder="Write your reflection"
            value={reflection}
            maxLength={600}
            onChange={(e) => setReflection(e.target.value)}
          />
          {errors.reflection && <p style={{ color: 'red' }}>{errors.reflection}</p>}
          <button type="submit">Submit</button>
        </form>
      </section>
    </section>
  );
};

export default ReflectionPage;
