import React, { useState }  from "react";
import Dashboard from "../components/dashboard";
import Navbar from "../components/navbar";
import { Box } from "@mui/system";
import { Button, TextField, Grid, styled, Stack, Table, TableBody, TableContainer, TableHead, TableRow, Paper, MenuItem} from "@mui/material";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';




export default function Product(){
    const [count, setCount] = useState (1)
    const [productlist, setProductList] = useState ([]); // List of Array
    const [formdata, setFormData] = useState({
        id: '',
        product: '',
        price: 0,      
        stocks: 0,
        category: '',
    }); // object array

    const handleSubmit = (event) => {
        event.preventDefault(); //in prevent sini na function na mag reload ang page 
        if (formdata.id === '' || formdata.product === '' || formdata.price === '' || formdata.stocks === '', formdata.category === ''){
            alert("Enter Value");
        }else{
            const newprod = ({
                id: count,
                product: formdata.product,
                price: formdata.price,
                stocks: formdata.stocks,
                category: formdata.category,
            });
            
            setProductList([...productlist, newprod]) // dini in add ang mga data sa form
            setCount(count+1)

            setFormData({
                id: '',
                product: '',
                price: '',      
                stocks: '',
                category: '',
            }); // In this part in reset lang niya sa empty ang mga form input once na trigger na ang button. 

            console.log(newprod)
        }
        
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        // Update the corresponding field in the form data
        setFormData({
          ...formdata,
          [name]: value,
        });
      };

    const DeleteProduct = (product) => {
        const delprodList = [...productlist];
        delprodList.splice(product, 1);
        setProductList(delprodList);
        setFormData(delprodList);
    }




    //   const currencies = [
    //     {
    //       value: 'USD',
    //       label: '$',
    //     },
    //     {
    //       value: 'EUR',
    //       label: '€',
    //     },
    //     {
    //       value: 'BTC',
    //       label: '฿',
    //     },
    //     {
    //       value: 'JPY',
    //       label: '¥',
    //     },
    //   ];
      
    
    
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
          border: 2,
        },
    }));

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
                    onSubmit={handleSubmit}
                    >
                    <Grid container spacing={3}>
                        <Grid item xs={11} sm={2}>
                        <TextField
                            required
                            id="outlined-required"
                            label="ID"
                            name="id"
                            value={count}
                            onChange={handleInputChange}
                            variant="outlined"
                            fullWidth
                                            
                        />
                        </Grid>
                        <Grid item xs={11} sm={2}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Product Name"
                            name="product"
                            value={formdata.product}
                            onChange={handleInputChange}
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
                            name="price"
                            value={formdata.price}
                            onChange={handleInputChange}
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
                            name="stocks"
                            value={formdata.stocks}
                            onChange={handleInputChange}
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
                            name="category"
                            value={formdata.category}
                            onChange={handleInputChange}
                            variant="outlined"
                            fullWidth
                        />

                        {/* <TextField
                            required
                            id="Select Categoty"
                            select
                            label="Category"
                            name="category"
                            value={formdata.category}
                            helperText="Please select your Category"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField> */}
                        </Grid>

                        <Grid item xs={11} sm={2}>
                        <Stack direction="row" spacing={4} style={{width: "100%", alignItems: "center"}}>
                            <Button variant="contained" sx={{p: 2, width: "100%", background:"black" }} type="submit">SUBMIT</Button>
                        </Stack>
                        </Grid>
                        
                    </Grid>
                    </form>

                    <Box height={50}/>
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
                                    <Stack direction="row" spacing={1}  style={{width: "85%", alignItems: "center", height: 49, marginRight:"-180px" }}>
                                        <Button variant="contained" size="small" color="success" sx={{p: 1, width: "50%",}} type="submit">EDIT</Button>
                                        <Button variant="contained" size="small"  color="error" sx={{p: 1, width: "50%",}} type="submit" onClick={() => DeleteProduct (product)}>DELETE</Button>
                                    </Stack>
                                </StyledTableCell>
                                
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Grid/>






                </Box>
               
            </Box>
           
          
           
           
        </>
    );
}