import React from "react";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";


function App() {

  return (
    <>
      <div style={{height: "100vh", backgroundColor: "#eeee"}}>
        <Navbar/>
        <Dashboard/>  
      </div>
    </>
  );
}

export default App;
