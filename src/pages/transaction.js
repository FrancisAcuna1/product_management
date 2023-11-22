import React  from "react";
import Dashboard from "../components/dashboard";
import Navbar from "../components/navbar";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";

export default function Transaction(){
    return(
        <>  
            <Navbar/>
            <Box height={5}/>
            <Box sx={{ display: 'flex'  }}/>
                {/* <Dashboard/> */}
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1 style={{display: "flex", marginLeft:"-1px"}}>TRANSACTION</h1>
                    
                </Box>
               
       
           
          
           
           
        </>
    );
}