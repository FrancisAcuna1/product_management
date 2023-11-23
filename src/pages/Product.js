import React, { useState }  from "react";
import Dashboard from "../components/dashboard";
import Navbar from "../components/navbar";
import { Box } from "@mui/system";
import { Button, TextField, Grid, styled, Stack, Table, TableBody, TableContainer, TableHead, TableRow, Paper, MenuItem, Modal}from "@mui/material";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';




export default function Product({categ, productlist, setProductList}){
    const [count, setCount] = useState (1)
  
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

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [editProductValue, setEditProductValue] = useState("");

    const handleEditProduct = (product) => {
        setSelectedProduct(product);
        setEditProductValue({
            id: product.id,
            product: product.product,
            price: product.price,
            stocks: product.stocks,
            category: product.category
            
        });
    };

    const handleUpdateProduct = () => {
        const updatedProduct = productlist.map((product) =>
        product === selectedProduct
            ? { ...product, 
                id: editProductValue.id,
                product: editProductValue.product, 
                price: editProductValue.price,
                stocks: editProductValue.stocks,
                category: editProductValue.category,
            }
            : product
        );

        setProductList(updatedProduct);
        handleCloseModal(); // Close the modal after updating
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setEditProductValue("");
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
          border: 2,
        },
    }));

    return(
        <>  
            <Navbar/>
            <Box sx={{ display: 'flex',  justifyContent: 'center', }}>
                {/* <Dashboard/> */}

                <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: 'white' }}>
                {/* <h1 style={{display: "flex", marginLeft:"-1px"}}>PRODUCTS</h1> */}
            
                <form
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '2px solid black',
                        padding: '20px',
                        width: '100%',
                        marginRight: '-20px'
                    }}
                    onSubmit={handleSubmit}
                    >
                    <Grid container spacing={3}>
                        <Grid item xs={11.8} sm={2}>
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
                        <Grid item xs={11.8} sm={2}>
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
                        <Grid item xs={11.8} sm={2}>
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
                        <Grid item xs={11.8} sm={2}>
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
                        <Grid item xs={11.8} sm={2}>
                        <TextField
                            required
                            id="Select Categoty"
                            select
                            label="Category"
                            name="category"
                            value={formdata.category}
                            onChange={handleInputChange}
                            fullWidth
                            helperText="Please select your Category"
                        >
                            {categ.map((item) => (
                                <MenuItem key={item.id} value={item.categories}>
                                    {item.categories}
                                </MenuItem>
                            ))}
                        </TextField>
                        </Grid>

                        <Grid item xs={11.8} sm={2}>
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
                                        <Button variant="contained" size="small" color="success" sx={{p: 1, width: "50%",}} type="submit" onClick={() => handleEditProduct (product)}>EDIT</Button>
                                        <Button variant="contained" size="small"  color="error" sx={{p: 1, width: "50%",}} type="submit" onClick={() => DeleteProduct (product)}>DELETE</Button>
                                    </Stack>
                                </StyledTableCell>
                                
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Grid/>

                    <Modal
                        open={Boolean(selectedProduct)}
                        onClose={handleCloseModal}
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                    >
                        <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            background: "white",
                            padding: "20px",
                            outline: "none",
                            width: "22%"
                            
                        }}
                        >
                        <h2 id="modal-title">Edit Product</h2>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            disabled
                            label="ID"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: 1, color: 'primary'}}
                            value={editProductValue.id}
                            onChange={(e) => setEditProductValue({...editProductValue, id: e.target.value})}
                        />
                         <TextField
                            label="Product"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: 1}}
                            value={editProductValue.product}
                            onChange={(e) => setEditProductValue({...editProductValue, product: e.target.value})}
                        />
                         <TextField
                            label="Price"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: 1}}
                            value={editProductValue.price}
                            onChange={(e) => setEditProductValue({...editProductValue, price: e.target.value})}
                        />
                         <TextField
                            label="Stocks"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: 1}}
                            value={editProductValue.stocks}
                            onChange={(e) => setEditProductValue({...editProductValue, stocks: e.target.value})}
                        />
                        <TextField
                            required
                            id="Select Categoty"
                            select
                            sx={{width:"100%"}}
                            value={editProductValue.category}
                            onChange={(e) => setEditProductValue({...editProductValue, category: e.target.value})}
                        >
                            {categ.map((item) => (
                                <MenuItem key={item.id} value={item.categories}>
                                    {item.categories}
                                </MenuItem>
                            ))}
                        </TextField>
                        </Grid>
                        <br/>
                        <Button variant="contained" color="primary" sx={{marginTop: 1, marginBottom: 1,}} onClick={handleUpdateProduct}>
                            Update
                        </Button>
                        </div>
                    </Modal>




                </Box>
                
               
            </Box>
           
          
           
           
        </>
    );
}