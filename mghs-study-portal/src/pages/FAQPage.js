import React from 'react';
import BackButton from '../components/BackButton';

const FAQPage = () => {
  return (
    <div>
      <header>
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to commonly asked questions.</p>
      </header>

      <nav>
          <BackButton/>
        </nav>

      <p>Find answers to commonly asked questions.</p>
      {/* Add FAQ list and details */}
    </div>
  );
};

export default FAQPage;
