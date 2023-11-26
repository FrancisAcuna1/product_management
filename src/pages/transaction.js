import React, { useState }  from "react";
import Navbar from "../components/navbar";
import { Box, display } from "@mui/system";
import {Tab, Grid, TextField, Button, Stack, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, styled, tableCellClasses, Paper, Card, CardContent, Typography, ListItem} from '@mui/material';
import { CardActionArea } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Gif } from "@mui/icons-material";


export default function Transaction({productlist, setProductList, transaction, setTransaction}){
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }; // this code is for tab function

    const handleTransaction = (item) => {
        if (item.stocks > 0) {
            
            const updatedProductList = productlist.map((product) =>
                product.id === item.id ? { ...product, stocks: product.stocks - 1,
                } : product
            );
            setTransaction((prevtransaction) => [
                ...prevtransaction,
                {
                    id: item.id,
                    product: item.product,
                    stocks: item.stocks,
                    price: item.price

                }
            ]);
            //setProductList(updatedProductList);
            setProductList(updatedProductList);
            console.log(setTransaction);
        }
       
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
        //   border: "2px black",
        },
    }));

    // SAMPLE LANG INI NA CODE PARA SA CART
    // const [cartItems, setCartItems] = useState([
    //     { id: 1, name: 'Product 1', price: 20 },
    //     { id: 2, name: 'Product 2', price: 30 },
    //     // Add more items as needed
    //   ]);
    
    //   const calculateTotal = () => {
    //     return cartItems.reduce((total, item) => total + item.price, 0);
    //   };



    return(
        <>  
            <Navbar/>
            <Box height={5}/>
            <Box sx={{ display: 'flex', }}/>
                <Box component="main" sx={{ flexGrow: 1, p: 2, backgroundColor: 'white' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Buy" value="1" />
                        <Tab label="Cart" value="2" />
                    </TabList>
                    </Box>
                    <TabPanel value="1">
                        <h1 style={{mariginTop: '-40px'}}>Buy</h1>
                        <Box height={510} overflow="auto">
                        <Grid container />
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                <TableRow>                            
                                    <StyledTableCell align="center">ID</StyledTableCell>
                                    <StyledTableCell align="center">PRODUCT</StyledTableCell>
                                    <StyledTableCell align="center">PRICE</StyledTableCell>
                                    <StyledTableCell align="center">STOCKS</StyledTableCell>
                                    <StyledTableCell align="center">CATEGORY</StyledTableCell>
                                    <StyledTableCell align="center">ACTION</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {productlist.map((product, index) => (
                                    <StyledTableRow key={index}>
                                    <StyledTableCell align="center">{product.id}</StyledTableCell>
                                    <StyledTableCell align="center">{product.product}</StyledTableCell>
                                    <StyledTableCell align="center">{product.price}</StyledTableCell>
                                    <StyledTableCell align="center">{product.stocks}</StyledTableCell>
                                    <StyledTableCell align="center">{product.category}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Stack direction="row" spacing={1}  style={{width: "99%", justifyContent:"center", alignItems: "center", height: 49, }}>
                                            <Button variant="contained" size="small" color="success" sx={{p: 1, width: "40%", }} type="submit" onClick={() => handleTransaction(product)}>Buy</Button>
                                        </Stack>
                                    </StyledTableCell>
                                    
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Grid/>
                        </Box>
                    </TabPanel>
                    <TabPanel value="2">
                        <h2>YOUR CART</h2>
                        <Box height={510} sx={{display: 'flex', justifyContent: 'center',}}>
                            <Box p={4}  overflow="auto" sx={{ width: '70%', border: '2px black'}}>
                                <Grid container spacing={2} alignItems="center" gutterBottom mb={3} sx={{backgroundColor: 'black',  textAlign: 'center'}}>
                                    <Grid item xs={12} sm={3}>
                                        <Typography  color={'white'} variant="h6" gutterBottom>
                                            Product Name 
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={1.3}>
                                        <Typography color={'white'} variant="h5" gutterBottom>
                                        |
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={2.3}>
                                        <Typography color={'white'} variant="h6" gutterBottom>
                                        Quantity
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={1.6}>
                                        <Typography color={'white'} variant="h6" gutterBottom>
                                        |
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={2.5}>
                                        <Typography color={'white'} variant="h6" gutterBottom>
                                        Price
                                        </Typography>
                                    </Grid>
                                
                                </Grid>

                                {/* Layout For Cart */}
                                {/* {cartItems.map((item) => ( */}
                                    {/* <div key={item.id}> */}
                                    <Grid container spacing={2} alignItems="center" gutterBottom mb={3} sx={{textAlign: 'center'}}>
                                    <Grid item xs={12} sm={3}>
                                        <Typography  variant="body1" gutterBottom>
                                        {/* {item.name} */}
                                        Price
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={5}>
                                        <Typography variant="body1" gutterBottom>
                                            1
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <Typography variant="body1" gutterBottom>
                                        {/* Price: ${item.price} */}
                                        1231231
                                        </Typography>
                                    </Grid>
                                    {/* <Typography variant="h6" gutterBottom>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Price: ${item.price}
                                    </Typography> */}
                                    <hr style={{marginRight: '20px'}}/>
                                    </Grid>
                                    {/* </div> */}
                                {/* ))} */}
                                <Grid container spacing={2} alignItems="center" gutterBottom mb={5} sx={{textAlign: 'center',}}>
                                
                                    <Grid item xs={12} sm={12}>
                                    <hr style={{ marginLeft: '-15px', width: "102%"}}/>
                                        <Typography variant="h6" gutterBottom sx={{ marginLeft: '59%'}}> 
                                            {/* Total: ${calculateTotal()} */}
                                            Total: 100023
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={8} sx={{ marginLeft: '59%'}}>
                                        <Button variant="contained" color="primary">
                                            Checkout
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>

                        {/* {transaction && <>
                        {transaction.map((item, index) => {
                            // if (item.product === item.product){

                            // }
                            return(
                                <>
                                <p key = {index}> Product Name: {item.product}</p>
                                <p key = {index}> No. Items:  {item.stocks}</p>
                                <p key = {index}> Price: {item.price}</p>
                               
                                </>
                               s
                            )
                        })} */}
                    
                    {/* </>} */}
                    </TabPanel>
              
                </TabContext>
                    {/* {productlist && <>
                        {productlist.map((item, index) => {
                            return(
                                <p key = {index}> {item.product}</p>
                            )
                        })}
                    </>} */}
                </Box>
               
       
           
          
           
           
        </>
    );
}