import React from "react";
import Expensis from "./components/Expensis";

const App = ({ data }) => {
  return (
    <>
      <h1>The Main App</h1>

      <Expensis data="prahalad" />
    </>
  );
};

export default App;
