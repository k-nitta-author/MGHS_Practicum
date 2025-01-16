import React, { useEffect, useState } from 'react';

// include this in places where you need to be able to complete an activity
const CompleteActivityModal = ({ activity_id, isVisible, setIsVisible }) => {
  // initialize stateful data
  const [reflection, setReflection] = useState('');

  // handle the reflection form submission
  async function HandleReflectionSubmit(e) {
    e.preventDefault();

    const URL = `https://mghs-backend.onrender.com/activity/${activity_id}/complete`;

    let result = await fetch(URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reflection: reflection, "intern_id": localStorage.getItem("OPTIFLOW_PUBLIC_ID") }),
    });

    if (result.ok) {
      setIsVisible(false); // Hide the modal on successful completion
    }
  }

  return (
    <section>
      {isVisible && (
        <section className="complete-activity-section">
          <section className="modal-content">


            <header>
              <h3>Completing Activity</h3>
            </header>


            {/* This section is for users who have clicked the Complete Activity Button */}
            <h2>Reflection</h2>
            <textarea
              onChange={(e) => {
                setReflection(e.target.value);
              }}
              value={reflection}
            ></textarea>
            <section>
              <button onClick={HandleReflectionSubmit}>Confirm</button>
              <button onClick={() => setIsVisible(false)}>Cancel</button>
            </section>
          </section>
        </section>
      )}
    </section>
  );
};

export default CompleteActivityModal;
