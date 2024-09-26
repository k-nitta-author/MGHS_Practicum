import React, { useState } from 'react';

const ReflectionPage = () => {
  const [reflection, setReflection] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle reflection submission
    console.log('Reflection submitted:', reflection);
  };

  return (
    <div>
      <h1>Submit Reflection</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your reflection"
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReflectionPage;
