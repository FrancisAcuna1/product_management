import React  from "react";
import Dashboard from "../components/dashboard";
import Navbar from "../components/navbar";
import { Box } from "@mui/system";


export default function Category(){
    return(
        <>  
            <Navbar/>
            <Box height={30}/>
            <Box sx={{ display: 'flex'  }}>
                <Dashboard/>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1 style={{textAlign:"center"}}>Category</h1>
                </Box>
               
            </Box>
           
          
           
           
        </>
    );
}