import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import Home from "../pages/Home";
import Product from "../pages/Product";
import Category from "../pages/Category";
// import Transaction from "./pages/transaction";
// import Report from "./pages/Report";


export default function NavTabs() {
 

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs aria-label="nav tabs example">
        <Home/>
      </Tabs>
      <Tabs aria-label="nav tabs example">
        <Product/>
      </Tabs>
      <Tabs aria-label="nav tabs example">
        <Category/>
      </Tabs>
    </Box>
  );
}