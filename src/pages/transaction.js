import React  from "react";
import Navbar from "../components/navbar";
import { Box } from "@mui/system";
import {Tab, Grid, TextField, Button, Stack, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, styled, tableCellClasses, Paper,} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Buy from './Buy';

export default function Transaction({productlist, setProductList}){
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleTransaction = (item) => {
        if (item.stocks > 0) {
          const updatedProductList = productlist.map((product) =>
            product.id === item.id ? { ...product, stocks: product.stocks - 1 } : product
          );
          setProductList(updatedProductList);
        }
      };
      
    // const handleTransaction = (productlist) => {
    //     if (productlist.stocks > 0){
    //         const BuyProduct = productlist.map((item) => {
    //             if (item.id === productlist.id){
    //                 return {...item, stocks: productlist.stocks - 1 }
    //             }
    //             return productlist;
            
    //     });
    //     setProductList(BuyProduct)
    //     }
    // }


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
            <Box height={5}/>
            <Box sx={{ display: 'flex', }}/>
                <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: 'white' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Buy" value="1" />
                        <Tab label="Cart" value="2" />
                    </TabList>
                    </Box>
                    <TabPanel value="1">
                        <h1>Buy</h1>
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
                        {/* {productlist && <>
                            {productlist.map((item, index) => {
                                return(
                                    <p key = {index}> {item.product}</p>
                                )
                            })}
                        </>} */}
                    </TabPanel>
                    <TabPanel value="2">
                        <h1>CART</h1>
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