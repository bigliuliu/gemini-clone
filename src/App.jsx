import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

const App = () => {
  console.log(import.meta.env.VITE_GEMINI_API_KEY, "========"); 
  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
};

export default App;
