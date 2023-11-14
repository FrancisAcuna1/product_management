import React  from "react";
import Dashboard from "../components/dashboard";
import Navbar from "../components/navbar";
import { Box, margin } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Home(){
    return(
        <>  
            <Navbar/>
            <Box height={30}/>
            <Box sx={{ display: 'flex'  }}>
                <Dashboard/>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                
                <Grid container spacing={1}>
                    <Grid item xs={3} sx={{marginTop: "40px"}}>
                        <Card sx={{ maxWidth: 335, height: "120px" }}>
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Category 1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Total Product: 200
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={3} sx={{marginTop: "40px"}}>
                        <Card sx={{ maxWidth: 335, height: "120px"}}>
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Category 2
                                </Typography>
                                <Typography variant="body2" color="text.secondary" >
                                    Total Product: 200
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={3} sx={{marginTop: "40px"}}>
                        <Card sx={{maxWidth: 335, height: "120px"}}>
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Category 3
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Total Product: 200
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={3} sx={{marginTop: "40px"}}>
                        <Card sx={{ maxWidth: 335, height: "120px" }}>
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Category 4
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Total Product: 200
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={3} sx={{marginTop: "40px"}}>
                        <Card sx={{ maxWidth: 335, height: "120px" }}>
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Category 5
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Total Product: 200
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                   
                </Grid>

                <Box height={30}/>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                    </Grid>
                </Grid>


                {/* <Box height={30}/>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                    </Grid>
                   
                    <Grid item xs={4}>
                    </Grid>
                </Grid> */}

                   
                </Box>
                
            </Box>
           
          
           
           
        </>
    );
}