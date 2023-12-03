import React from "react";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
import { createTheme, ThemeProvider } from '@mui/material';
import Buy from './pages/Buy'
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
      <div style={{height: "100vh", backgroundColor: "#eeee"}}>
        <Navbar/>
        <Dashboard/>  
        

      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
