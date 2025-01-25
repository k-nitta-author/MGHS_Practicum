import React, { useState } from 'react';

export default function ReflectionForm({ reflection, activityId, isComplete }) {
  const [CurrentReflection, setReflection] = useState(reflection);
  const [errors, setErrors] = useState({});
  const [selectedActivity, setSelectedActivity] = useState(activityId);
  const [complete, setComplete] = useState(isComplete);

  // validate form inputs
  const validate = () => {
    let tempErrors = {};
    if (!CurrentReflection) tempErrors.reflection = "Reflection is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle reflection form submission
  const handleSubmitReflection = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const URL = `https://mghs-backend.onrender.com/activity/${selectedActivity}/sub/reflection`;

    try {
      const response = await fetch(
        URL,
        {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            intern_id: localStorage.getItem('OPTIFLOW_PUBLIC_ID'),
            reflection: CurrentReflection
          })
        }
      );

      if (response.ok) {
        console.log('Reflection submitted successfully');
        window.location.reload(); // Reload the page on successful submission
      } else {
        console.error('Failed to submit reflection');
      }
    } catch (error) {
      console.error('There was a problem with the fetch request:', error);
    }
  };

  return (
    <form onSubmit={handleSubmitReflection} className="reflection-form">
      <textarea
        placeholder="Write your reflection"
        value={CurrentReflection}
        maxLength={600}
        onChange={(e) => setReflection(e.target.value)}
        disabled={complete}
      />
      {errors.reflection && <p style={{ color: 'red' }}>{errors.reflection}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}