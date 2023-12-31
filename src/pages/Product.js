import React, { useState }  from "react";
import Dashboard from "../components/dashboard";
import Navbar from "../components/navbar";
import { Box } from "@mui/system";
import { Button, TextField, Grid, styled, Stack, Table, TableBody, TableContainer, TableHead, TableRow, Paper, MenuItem, Modal, Alert, Snackbar,}from "@mui/material";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { SnackbarProvider, useSnackbar,} from 'notistack';
import Swal from 'sweetalert2'
import toast from "react-hot-toast";



export default function Product({categ, productlist, setProductList, count, setCount}){
    const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
    const [deleteSnackbarOpen, setDeleteSnackbarOpen] = useState(false);
    const [updateSnackbarOpen, setUpdateSnackbarOpen] = useState(false);

    const handleCloseSuccessSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setSuccessSnackbarOpen(false);
    };
    const showSuccessSnackbar = () => {
        setSuccessSnackbarOpen(true);
    };

    const handleClosedeleteSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setDeleteSnackbarOpen(false);
    };

    const DeleteSnackbar = () => {
        setDeleteSnackbarOpen(true);
    };
    // Closing

    const handleCloseUpdateSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setUpdateSnackbarOpen(false);
    };

    const UpdateSnackbar = () => {
        setUpdateSnackbarOpen(true);
    };

    const [formdata, setFormData] = useState({
        id: '', 
        product: '',
        price: 0,      
        stocks: 0,
        category: '',
    }); // object array

    const isProductAdded = (productName) => {
        // Case-insensitive check for duplicate product names
        const lowerCaseProductName = productName.toLowerCase();
        return productlist.some((product) => product.product.toLowerCase() === lowerCaseProductName);
    };

    

    const handleSubmit = (event) => {
        event.preventDefault(); //in prevent sini na function na mag reload ang page 
        if (formdata.id === '' || formdata.product === '' || formdata.price === '' || formdata.stocks === '', formdata.category === ''){
            alert("Enter Value");
        }
        else if (isProductAdded(formdata.product)) {
            Swal.fire({
                title: "Error!",
                text: `'${formdata.product}' is already Added. Please check and try again.`,
                icon: "error",
                timer: 2500,
                width: 400,
              });
              return; // Stop further execution
        }
        else if(formdata.price <= 0 || formdata.stocks < 0) {
            // Handle the case where a negative price is found
            Swal.fire({
              title: "Error!",
              text: "Negative Price is not accepted. Please check and try again.",
              icon: "error",
              timer: 2500,
              width: 450,
            });
            return;
        }
        else{
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
            // setSuccess(true);
            showSuccessSnackbar();
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

    // const DeleteProduct = (product) => {
    //     const delprodList = [...productlist];
    //     delprodList.splice(product, 1);
    //     setProductList(delprodList);
    //     setFormData(delprodList);
    //     DeleteSnackbar();
    // }
    const DeleteProduct = (product) => {
        const deleteProductList = productlist.filter((p) => p.id !== product.id);
        setProductList(deleteProductList);
        DeleteSnackbar();
    }
    

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [editProductValue, setEditProductValue] = useState("");

    const handleEditProduct = (product) => {
        setSelectedProduct(product);
        setEditProductValue({
            id: product.id,
            product: product.product,
            price: parseInt(product.price),
            stocks: parseInt(product.stocks),
            category: product.category
            
        });
    };

    const handleUpdateProduct = () => {
        if(editProductValue.price <= 0 || editProductValue.stocks < 0) {
            alert('Invalid Input, please input greaterthan to 0')
            return;
        }
        const isPriceValid = !isNaN(parseFloat(editProductValue.price));
        const isStocksValid = !isNaN(parseInt(editProductValue.stocks));
        if (!isPriceValid || !isStocksValid) {;
            alert('Invalid Input, please input numbers')
            return;
        } 

        const isProductNameChanged = selectedProduct.product !== editProductValue.product;
        if (isProductNameChanged) {
            const isIdAlreadyPresent = productlist.some(
                (product) => product.product.toLowerCase() === editProductValue.product.toLowerCase()
            );

            if (isIdAlreadyPresent) {
                alert(
                    `Product ${editProductValue.product} is already added, please try a different product name`
                );
                return;
            }
        }

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
            UpdateSnackbar();
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setEditProductValue("");
    };
    const CancelModal = () => {
        handleCloseModal()
    }
          
    
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
        '&:nth-of-type(even)': {
            backgroundColor: '#9daccc',
       
        },

        '&:nth-of-type(odd)': {
          backgroundColor: '#c1c9db',
        },
        // hide last border
        '&:last-child td, &:last-child th': {
        //  border: "2px black",
        },
    }));

    return(
        <>  
            <Navbar/>
            <SnackbarProvider maxSnack={1}>
            <Box sx={{ display: 'flex',  justifyContent: 'center', }}>
                <Box component="main" sx={{ flexGrow: 1, p: 2,  minHeight: '100%'}}>
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
                            <Button variant="contained" sx={{p: 2, width: "100%", background:"black", '&:hover':{backgroundColor: '#4e9ae6'}}} type="submit">SUBMIT</Button>
                        </Stack>
                        </Grid>
                        
                    </Grid>
                    </form>

                    <Box height={50}/>
                    <Box height={530} overflow="auto">
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
                                <StyledTableCell align="center">₱ {product.price}.00</StyledTableCell>
                                <StyledTableCell align="center">{product.stocks}</StyledTableCell>
                                <StyledTableCell align="center">{product.category}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <Stack direction="row" spacing={1}  style={{width: "85%", alignItems: "center", height: 49, marginRight:"-180px" }}>
                                        <Button variant="contained" size="small" sx={{p: 1, width: "50%", backgroundColor:"#394d7d", color:'white'}} type="submit" onClick={() => handleEditProduct (product)}><ModeEditOutlineOutlinedIcon sx={{marginLeft: '-10px', marginRight: '2px', color:'white'}}/>Edit</Button>
                                        <Button variant="contained" size="small"  sx={{p: 1, width: "50%", backgroundColor:"#e53935", color:'white'}} type="submit" onClick={() => DeleteProduct (product)}> <DeleteOutlineIcon sx={{marginLeft: '-10px'}}/>Delete</Button>
                                     
                                    </Stack>
                                </StyledTableCell>
                                
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Grid/>
                    </Box>

                    <Modal
                        open={Boolean(selectedProduct)}
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
                            required
                            label="Product"
                            type="text"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: 1}}
                            value={editProductValue.product}
                            onChange={(e) => setEditProductValue({...editProductValue, product: e.target.value})}
                        />
                         <TextField
                            required   
                            label="Price"
                            variant="outlined"
                            type="number"
                            fullWidth
                            sx={{marginBottom: 1}}
                            value={editProductValue.price}
                            onChange={(e) => setEditProductValue({...editProductValue, price: e.target.value})}
                        />
                         <TextField
                            required
                            label="Stocks"
                            variant="outlined"
                            type="number"
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
                        <Button variant="contained"  sx={{backgroundColor: '#9e9e9e', marginLeft: '10px'}} onClick={CancelModal}>
                            Cancel
                        </Button>
                        </div>
                    </Modal>




                </Box>
                <Snackbar
                    open={successSnackbarOpen}
                    autoHideDuration={1000}
                    onClose={handleCloseSuccessSnackbar}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    >
                    <Alert onClose={handleCloseSuccessSnackbar} p={5}  sx={{ width: '100%', backgroundColor: 'green', color: 'white'}}  
                    iconMapping={{ success: <CheckCircleOutlineIcon style={{ color: 'white' }} /> }}
                    >
                        Product added successfully!
                    </Alert> 
                </Snackbar>

                <Snackbar
                    open={deleteSnackbarOpen}
                    autoHideDuration={1000}
                    onClose={handleClosedeleteSnackbar}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
                    
                    >
                    <Alert onClose={handleClosedeleteSnackbar} sx={{ width: '100%', backgroundColor: 'red', color: 'white'}}  
                    iconMapping={{ success: <CheckCircleOutlineIcon style={{ color: 'white' }} /> }}
                    >
                        Product deleted successfully!
                    </Alert> 
                </Snackbar>

                <Snackbar
                    open={updateSnackbarOpen}
                    autoHideDuration={1000}
                    onClose={handleCloseUpdateSnackbar}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
                    
                    >
                    <Alert onClose={handleCloseUpdateSnackbar} sx={{ width: '100%', backgroundColor: 'green', color: 'white'}}  
                    iconMapping={{ success: <CheckCircleOutlineIcon style={{ color: 'white' }} /> }}
                    >
                       Product updated successfully!
                    </Alert> 
                </Snackbar>
                
               
            </Box>
            </SnackbarProvider>
           
          
           
           
        </>
    );
}