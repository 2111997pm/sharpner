import React from "react";
import Expensis from "./components/Expensis";
import MyForm from "./components/MyForm";
import ConditionalRenderingExample from "./components/ConditonalRendering";

const App = ({ data }) => {
  return (
    <>
      <h1>The Main App</h1>

      <MyForm />
      <ConditionalRenderingExample/>
      <Expensis data="prahalad" />
    </>
  );
};

export default App;
