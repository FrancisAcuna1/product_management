import {React, useState}  from "react";
import Dashboard from "../components/dashboard";
import Navbar from "../components/navbar";
import { Box, Grid, TextField, Button, Stack, TableContainer, Table, TableHead, TableRow, TableBody,  Paper, styled  } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export default function Transaction(){
    const [count, setCount] = useState (1)
    const [categ, setCateg] = useState([]);
    const [newcateg, setNewCateg] = useState({
        id: '',
        categories: '',
    });

    const handleSubmitCateg = (event) => {
        event.preventDefault();
        if (newcateg.categories === '') {
            alert("Enter Category Value!");
        } else {
            const newcateglist = ({
                id: count,
                categories: newcateg.categories,
            });

            setCount(count+1)
            setCateg([...categ, newcateglist]);
            setNewCateg({
                id: '',
                categories: '',
            });
            console.log(newcateg);

           
           
        }
    };
    const handleNewCateg = (event) => {
        const {value} = event.target;

        setNewCateg({
            ...newcateg,
            id: count,
            categories: value,
        });
    };

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
    }));
      
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: "2px black",
        },
    }));
    return(
        <>  
            <Navbar/>
            <Box height={30}/>
            <Box sx={{ display: 'flex'  }}>
               
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1 style={{textAlign:"center"}}>STOCKS!</h1>
                    <form
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '2px solid black',
                            padding: '20px',
                            width: "50%"
                        }}
                        onSubmit={handleSubmitCateg}
                       
                        >
                        <Grid container spacing={2}>
                            <Grid item xs={11} sm={2}>
                               <TextField
                                    required
                                    id="outlined-required"
                                    label="ID"
                                    name="id"
                                    value={count}
                                    onChange={handleNewCateg}
                                    variant="outlined"
                                    fullWidth
                                
                              
                                />
                            </Grid>
                            <Grid item xs={11} sm={6}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Category"
                                    name="category"
                                    value={newcateg.categories}
                                    onChange={handleNewCateg}
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>

                          
                            <Grid item xs={11} sm={4}>
                            <Stack direction="row" spacing={2} style={{width: "100%", alignItems: "center"}}>
                                <Button variant="contained" sx={{p: 2, width: "100%", background:"black" }} type="submit">SUBMIT</Button>
                            </Stack>
                            </Grid>
                        </Grid>
                    </form>
                    
                </Box>

                <Box height={50}/>
                    <Grid container />
                    
                    <TableContainer component={Paper} sx={{width: "50%"}}>
                        <Table sx={{ minWidth: 300}} aria-label="customized table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">ID</StyledTableCell>                            
                                <StyledTableCell align="center">Categories</StyledTableCell>
                                <StyledTableCell align="center">Action</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {categ.map((categlist, value) => (
                                <StyledTableRow key={value}>
                                <StyledTableCell align="center">{categlist.id}</StyledTableCell>
                                <StyledTableCell align="center">{categlist.categories}</StyledTableCell>
                                <StyledTableCell align="center">

                                    <Stack direction="row" spacing={1}  style={{display: "flex", justifyContent:"center", width: "100%", alignItems: "center", height: 35,}}>
                                        <Button variant="contained" size="small" color="success" sx={{p: 1, width: "10%", justifyContent:"center", alignItems:"center"}} type="submit" >EDIT</Button>
                                        <Button variant="contained" size="small"  color="error" sx={{p: 1, width: "10%", justifyContent:"center", alignItems:"center"}} type="submit">DELETE</Button>
                                    </Stack>
                                </StyledTableCell>
                                
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
               
            </Box>
           
          
           
           
        </>
    );
}