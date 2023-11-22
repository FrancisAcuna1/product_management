import React  from "react";
import Dashboard from "../components/dashboard";
import Navbar from "../components/navbar";
import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Home({arraycateg, arrayprod}){
    return(
        <>  
            <Navbar/>
            <Box height={30}/>
            <Box sx={{ display: 'flex'  }}>
                <Dashboard/>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1 style={{display: "flex", marginLeft:"-1px"}}>DASHBOARD</h1>
                
                    <Grid container spacing={1}>
                        {arraycateg.map((item) => (
                        <Grid item xs={3} sx={{marginTop: "2px"}}>
                            <Card sx={{ maxWidth: 335, height: "120px" }}>
                                <CardActionArea>
                                    <CardContent>                               
                                    <Typography gutterBottom variant="h5" component="div">
                                    {item.categories}
                                    </Typography>
                                    {arrayprod.map((index) => (
                                    <Typography key={index.id} variant="body2" color="text.secondary">
                                    Total Product: {index.id}
                                    </Typography>
                                    ))}
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>

                    <Box height={30}/>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                        </Grid>
                    </Grid>
                   
                </Box>
                
            </Box>
            
      
        
           
           
        </>
    );
}