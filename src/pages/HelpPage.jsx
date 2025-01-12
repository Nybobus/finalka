import React from 'react';

const HelpPage = () => {
  return (
    <div className="help-container">
      <h1>Help & Support</h1>
      <div className="help-section">
        <h2>Getting Started</h2>
        <p>Learn how to get started with our platform and navigate through the features.</p>
        <ul>
          <li>Creating an account</li>
          <li>Setting up your profile</li>
          <li>Exploring the dashboard</li>
        </ul>
      </div>

      <div className="help-section">
        <h2>FAQ</h2>
        <p>Find answers to the most frequently asked questions.</p>
        <ul>
          <li>How do I reset my password?</li>
          <li>How can I contact support?</li>
          <li>What is the refund policy?</li>
        </ul>
      </div>

      <div className="help-footer">
        <p>Need more help? Contact us at support@example.com</p>
      </div>
    </div>
  );
}

export default HelpPage;
