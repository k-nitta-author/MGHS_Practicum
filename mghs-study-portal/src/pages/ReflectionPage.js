import React, { useState } from 'react';

// get all reflections from the api in the db
async function get_reflections(){

  const URL = "";

  const request = await fetch(
    URL,
    {
      method: "POST",
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
  }
  )

  let reflection_data = request.json()

  console.log(await reflection_data)

}

const ReflectionPage = () => {
  
  const [ActivitySubscriptions, getActivitySubscriptions] = useState([

    {
      "user": "bob",
      "reflection": "asjd asdk aksjhd ak sjdh aksdh"
    },
    {
      "user": "bob",
      "reflection": "asjd asdk aksjhd ak sjdh aksdh"
    },
    {
      "user": "bob",
      "reflection": "asjd asdk aksjhd ak sjdh aksdh"
    }
  ])
  const [reflection, setReflection] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle reflection submission
    console.log('Reflection submitted:', reflection);
  };

  return (
    <section class="reflection-section">
      <h1>Submit Reflection</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your reflection"
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ReflectionPage;
