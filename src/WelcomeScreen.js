import React, { useState } from 'react';
import JoinUsPanel from './JoinUsPanel';

const WelcomeScreen = () => {
  const [selectedAccount, setSelectedAccount] = useState(null);

  const handleAccountSelect = (accountType) => {
    setSelectedAccount(accountType);
    console.log(`Selected account type: ${accountType}`);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {/* Background Circles */}
      <div className="circle-1"></div>
      <div className="circle-2"></div>

      {/* Welcome Text */}
      <h1 className="welcome-text">Welcome...</h1>

      {/* Join Us Panel */}
      {!selectedAccount ? (
        <JoinUsPanel onAccountSelect={handleAccountSelect} />
      ) : (
        <div className="join-panel confirmation">
          <h2>Welcome, {selectedAccount} User!</h2>
          <p>You’ve chosen a {selectedAccount} account. Let’s get started!</p>
        </div>
      )}

      {/* Footer Links */}
      <div className="footer">
        <a href="#">Terms of Use</a>
        <span>|</span>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
};

export default WelcomeScreen;