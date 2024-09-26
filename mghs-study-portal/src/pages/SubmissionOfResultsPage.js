import React, { useState } from 'react';

const SubmissionOfResultsPage = () => {
  const [results, setResults] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the results to the backend
    console.log('Results submitted:', results);
  };

  return (
    <div>
      <h1>Submit Task Results</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your results here"
          value={results}
          onChange={(e) => setResults(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmissionOfResultsPage;
