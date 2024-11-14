import React, { useState } from 'react';


async function post_reflection(){

  const URL = "";

  const request = await fetch(
    URL,
    {
      method: "POST"
    }
  )

}

const ReflectionPage = () => {
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
