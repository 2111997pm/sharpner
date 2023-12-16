import React from "react";
import Expensis from "./components/Expensis";
import MyForm from "./components/MyForm";
import { useState } from 'react';

import ConditionalRenderingExample from "./components/ConditonalRendering";

const App = ({ data }) => {
  const [goal, setGoal] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setGoal(inputValue);

    // Enable the button if at least one character is entered
    setIsButtonDisabled(inputValue.length === 0);
  };

  const handleAddGoalClick = () => {
    // Add your logic here for handling the "Add Goal" button click
    console.log('Goal added:', goal);
  };

  return (
    <>
      <h1>The Main App</h1>

      <MyForm />
      <ConditionalRenderingExample/>
      <Expensis data="prahalad" />
      <div>
      <input
        type="text"
        placeholder="Enter your goal"
        value={goal}
        onChange={handleInputChange}
      />
      <button
        style={{ backgroundColor: isButtonDisabled ? 'lightcoral' : 'red' }}
        onClick={handleAddGoalClick}
        disabled={isButtonDisabled}
      >
        Add Goal
      </button>
    </div>

    </>
  );
};

export default App;
