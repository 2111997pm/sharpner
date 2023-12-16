import React from "react";
import Expensis from "./components/Expensis";
import MyForm from "./components/MyForm";

const App = ({ data }) => {
  return (
    <>
      <h1>The Main App</h1>

      <MyForm />
      <Expensis data="prahalad" />
    </>
  );
};

export default App;
