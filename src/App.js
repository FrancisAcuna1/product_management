import React from "react";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
    ].join(','),
  },});


function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <div style={{height: "100vh", backgroundColor: "#eeee"}}>
        <Navbar/>
        <Dashboard/>  
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
