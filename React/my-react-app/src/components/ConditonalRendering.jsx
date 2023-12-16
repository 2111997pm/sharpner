import React, { useState } from 'react';

const ConditionalRenderingExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle the login state
  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      <button onClick={handleLoginToggle}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      {isLoggedIn ? (
        <p>Welcome! You are logged in.</p>
      ) : (
        <p>Please login to access the content.</p>
      )}
    </div>
  );
};

export default ConditionalRenderingExample;
