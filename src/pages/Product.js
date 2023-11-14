import React  from "react";
import Dashboard from "../components/dashboard";
import Navbar from "../components/navbar";
import { Box, width } from "@mui/system";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
export default function Product(){
    return(
        <>  
            <Navbar/>
            <Box height={30}/>
            <Box sx={{ display: 'flex'  }}>
                <Dashboard/>

                <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop:"10px" }}>
                <h1 style={{display: "flex", marginLeft:"-1px"}}>PRODUCTS</h1>
            
                <form
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '2px solid black',
                        padding: '20px',
                    }}
                    >
                    <Grid container spacing={3}>
                        <Grid item xs={11} sm={2}>
                        <TextField
                            required
                            id="outlined-required"
                            label="ID"
                            variant="outlined"
                            fullWidth
                           
                        />
                        </Grid>
                        <Grid item xs={11} sm={2}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Product Name"
                            variant="outlined"
                            fullWidth
                           
                        />
                        </Grid>
                        <Grid item xs={11} sm={2}>
                        <TextField
                            required
                            id="outlined-number"
                            label="Price"
                            type="number"
                            InputLabelProps={{ shrink: true }}
                            variant="outlined"
                            fullWidth
                           
                        />
                        </Grid>
                        <Grid item xs={11} sm={2}>
                        <TextField
                            required
                            id="outlined-number"
                            label="Stock"
                            type="number"
                            InputLabelProps={{ shrink: true }}
                            variant="outlined"
                            fullWidth
                           
                        />
                        </Grid>
                        <Grid item xs={11} sm={2}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Category"
                            variant="outlined"
                            fullWidth
                           
                        />
                        </Grid>
                        <Grid item xs={11} sm={2}>
                        <Stack direction="row" spacing={4} style={{width: "100%", alignItems: "center"}}>
                            <Button variant="contained" sx={{p: 2, width: "100%", background:"black"}}>SUBMIT</Button>
                        </Stack>
                        </Grid>
                        
                    </Grid>
                    </form>
                   
                </Box>
               
            </Box>
           
          
           
           
        </>
    );
}