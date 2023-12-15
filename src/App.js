import React from "react";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
import { createTheme, ThemeProvider } from '@mui/material';
const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'sans serif'
    ].join(','),
  },});


function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <div style={{minHeight: "100vh", backgroundColor: "#becccf"}}>
        <Navbar/>
        <Dashboard/>  
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
