import React  from "react";
import Navbar from "../components/navbar";
import Dashboard from "../components/dashboard";
import { Box } from "@mui/system";


export default function Report(){
    return(
        <>  
            <Navbar/>
            <Box height={30}/>
            <Box sx={{ display: 'flex'  }}>
                <Dashboard/>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1 style={{textAlign:"center"}}>Report</h1>
                </Box>
               
            </Box>
           
          
           
           
        </>
    );
}