import React from 'react';
import '../index.css';

const SuccessPage: React.FC = () => {
  return (
    <div className="success-container">
      <h2>Form Successfully Submitted</h2>
      <p>Your message has been sent. We will get back to you soon!</p>
    </div>
  );
};

export default SuccessPage;
