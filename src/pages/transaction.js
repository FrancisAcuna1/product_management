import React, { useState, useEffect, useRef} from "react";
import Navbar from "../components/navbar";
import {Box, Grid, Button, Stack, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, styled, tableCellClasses, Paper, Typography, ListItemIcon, ListItem, ListItemText, Checkbox, Modal, Snackbar,Alert,Badge} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Tab } from "@mui/material";
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontSharpIcon from '@mui/icons-material/StorefrontSharp';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { SnackbarProvider, useSnackbar,} from 'notistack';
import Swal from 'sweetalert2'

export default function Transaction({
  productlist,
  setProductList,
  transaction,
  setTransaction,
  checkeditem,
  setCheckedItem,
  setIsCheckoutDisabled,
  isCheckoutDisabled,
  orderHistory,
  setOrderHistory
}) {
  const [value, setValue] = React.useState("1");
  // const [latestOrderId, setLatestOrderId] = useState('1')
  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
  const [removeSnackbarOpen, setRemoveSnackbarOpen] = useState(false);

  const handleCloseSuccessSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
    return;
    }
    setSuccessSnackbarOpen(false);
    };
  const showSuccessSnackbar = () => {
    setSuccessSnackbarOpen(true);
    // You can customize the message based on the variant
  }
  const handleCloseRemoveSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
    return;
    }
    setRemoveSnackbarOpen(false);
    };
  const showRemoveSnackbar = () => {
    setRemoveSnackbarOpen(true);
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTransaction = (item) => {
    if (item.stocks > 0) {
      const updatedProductList = productlist.map((product) =>
        product.id === item.id
          ? { ...product, stocks: product.stocks}
          : product
      );

      setProductList(updatedProductList);

      const existingCartItem = transaction.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingCartItem) {
        const updatedTransaction = transaction.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, stocks: cartItem.stocks + 1 }
            : cartItem
        );
        setTransaction(updatedTransaction);
      } else {
        setTransaction((prevtransaction) => [
          ...prevtransaction,
          {
            id: item.id,
            product: item.product,
            stocks: 1,
            price: item.price,
          },
        ]);
      }
    }
    showSuccessSnackbar()
  };

  const handleRemoveItem = (productId) => {
    setTransaction((prevtransaction) => {
      const removedItem = prevtransaction.find((item) => item.id === productId);
      if (removedItem) {
        const updatedProductList = productlist.map((product) =>
          product.id === productId
            ? { ...product, stocks: parseInt(product.stocks)}
            : product
        );
        setProductList(updatedProductList);
      }
  
      const updatedTransaction = prevtransaction
        .map((item) =>
          item.id === productId
            ? { ...item, stocks: item.stocks > 0 ? item.stocks - 1 : 0 }
            : item
        )
        .filter((item) => item.stocks > 0);

      return updatedTransaction;
    });
    showRemoveSnackbar();
  };
  
    useEffect(() => {
      // Create an array of checked items
      const checkedItems = transaction.filter((item) => item.checked);
      // Update the checked items state
      setCheckedItem(checkedItems);
    }, [transaction]);
  
    const handleCheckboxChange = (itemId) => {
      setTransaction((prevTransaction) => {
        const updatedTransaction = prevTransaction.map((item) =>
          item.id === itemId ? { ...item, checked: !item.checked } : item
        );
        return updatedTransaction;
      });
      
      const checkedItemToAdd = transaction.find((item) => item.id === itemId);
      setCheckedItem((prevCheckedItems) =>
        checkedItemToAdd && checkedItemToAdd.checked
        ? [...prevCheckedItems, checkedItemToAdd]
        : prevCheckedItems.filter((item) => item.id !== itemId)
      );
    
      setIsCheckoutDisabled(false);
    };
    
    
    const PlacetoOrder = () => {
      const checkedID = checkeditem.map((item) => item.id);
      const insufficientStocksItems = [];
    

      const updatedTransaction = transaction.filter(
        (item) => !checkedID.includes(item.id)
      );
    
      const updatedProductList = productlist.map((product) => {
        const checkedItem = checkeditem.find(
          (checkedItem) => checkedItem.id === product.id
        );
    
        if (checkedItem) {
          const prodtStocks = product.stocks;
          const quantityToAdd = checkedItem ? checkedItem.stocks : 0;
    
          if (quantityToAdd > prodtStocks) {
            insufficientStocksItems.push(checkedItem);
            return product;
          }
    
          return {
            ...product,
            stocks: product.stocks - quantityToAdd,
          };
        }
    
        return product;
      });
    
      if (insufficientStocksItems.length > 0) {
        Swal.fire({
          title: 'Error!',
          text: 'Quantity exceeds available stocks for some items!',
          icon: 'error',
          timer: 2500,
          width: 450,
        });
        return;
      }
    
      setProductList(updatedProductList);
      setOrderHistory((prevOrderHistory) => [
        ...prevOrderHistory,
        {
          items: checkeditem,
        },
      ]);
    
      setTransaction(updatedTransaction);
    
      Swal.fire({
        title: 'SUCCESS!',
        text: " Item's Ordered successfully!",
        icon: 'success',
        timer: 2500,
        width: 450,
      });
    
      setCheckedItem([]);
    };
    // const PlacetoOrder = () => {
    //   const checkedID = checkeditem.map((item) => item.id);
    //   const updatedTransaction = transaction.filter(
    //     (item) => !checkedID.includes(item.id)
    //   );
    //   setTransaction(updatedTransaction);

    //   let insufficientStocks = false;

    //   const updatedProductList = productlist.map((product) => {
    //     const checkedItem = checkeditem.find(
    //       (checkedItem) => checkedItem.id === product.id
    //     );
    //     if (checkedItem) {
    //       const quantityItems = checkedItem.stocks;
    //       if (quantityItems > product.stocks) {
    //         const quantityToAdd = checkedItem ? checkedItem.stocks : 0;
    //         return {
    //           ...product,
    //           stocks: product.stocks - quantityToAdd,
    //         };
    //       } else {
    //         insufficientStocks = true;
    //         return product;
            
    //       }
    //     }

    //     // Return the original product if not found in checked items
    //     return product;
    //   });
      
      
    //   if (insufficientStocks) {
    //     Swal.fire({
    //       title: "Error!",
    //       text: "Insufficient stocks for some items!",
    //       icon: "error",
    //       timer: 2500,
    //       width: 450,
    //     });
    //     return;
    //   }

    //   setProductList(updatedProductList);
    
    //   setOrderHistory((prevOrderHistory) => [
    //     ...prevOrderHistory,
    //     {
    //       items: checkeditem,
    //     },
    //   ]);
    
    //   Swal.fire({
    //     title: "SUCCESS!",
    //     text: " Item's Ordered successfully!",
    //     icon: "success",
    //     timer: 2500,
    //     width: 450,
    //   });
    
    //   setCheckedItem([]);
    // };
    
    
    
    console.log(checkeditem);

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
          backgroundColor: '#9daccc', // Set your desired transparent background color for even rows
     
      },

      '&:nth-of-type(odd)': {
        backgroundColor: '#c1c9db',
      },
      // hide last border
      '&:last-child td, &:last-child th': {
      //  border: "2px black",
      },
  }));
  return (
    <>
      <Navbar />
      <SnackbarProvider maxSnack={1}>
      <Box height={5} />
      <Box sx={{ display: "flex" }} />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 2, marginTop: "10px" }}
      >
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{ marginLeft: "10px" }}
                >
                    {/* <Tab label="Buy" value="1" />   */}
                    <Tab 
                        label={
                            <ListItem                
                                sx={{
                                minHeight: 48,
                                px: 2.5,
                                }}
                            >
                            <React.Fragment sx={{ fontSize: 16,  alignItems: 'center' }}>

                                        <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            justifyContent: 'center',
                                            marginRight: 0.4
                                        }}
                                        >
                                        <StorefrontSharpIcon sx={{fontSize: 30, marginLeft: -2.2, color: '#1565c0'}}/>
                                        </ListItemIcon>                   
                                        <ListItemText primary="Buy" sx={{ alignItems: "center"}} />
                                  
                            </React.Fragment>
                            </ListItem>  
                        }
                        value="1"
                    />

                    <Tab 
                        label={
                            <ListItem                
                                sx={{
                                minHeight: 48,
                                px: 2.5,
                                }}
                            >
                            <React.Fragment sx={{ fontSize: 16,  alignItems: 'center' }}>

                                        <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            justifyContent: 'center',
                                        }}
                                        >
                                          <Badge badgeContent={transaction.length} color="error">
                                            <ShoppingCartIcon sx={{fontSize: 30, marginLeft: -2, marginRight: 0.5,  color: '#ff3d00'}}/>
                                          </Badge>

                                        {/* <LocalMallSharpIcon sx={{fontSize: 30, marginLeft: -2, marginRight: 0.5,  color: '#ff3d00'}}/> */}
                                        </ListItemIcon>                   
                                        <ListItemText primary="Cart" sx={{ alignItems: "center", marginTop: '8px'}} />
                                  
                            </React.Fragment>
                            </ListItem>  
                        }
                        value="2"
                    />
                </TabList>

            </Box>

            <TabPanel value="1">
            <h1 style={{ marginTop: "-20px", textAlign: "left" }}>Buy</h1>
            <Box height={510} overflow="auto" sx={{ marginTop: "5px"}}>
                <Grid container />
                <TableContainer component={Paper} style={{ position: 'relative' }}>
                <Table
                  sx={{ minWidth: 700 }}
                  aria-label="customized table"
                >
                    <TableHead> 
                        <TableRow >
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
                      product.stocks === 0 ? 
                      (<></>) 
                      :
                    <StyledTableRow key={index}>
                        <StyledTableCell align="center">
                          {product.id}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {product.product}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                        ₱ {product.price}.00
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {product.stocks === 0 ? (
                            "Out of Stock"
                          ) : (
                            product.stocks
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {product.category}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Stack
                            direction="row"
                            spacing={1}
                            style={{
                              width: "99%",
                              justifyContent: "center",
                              alignItems: "center",
                              height: 49,
                            }}
                          >
                              <Button
                                variant="contained"
                                size="small"
                                sx={{ p: 1, width: "40%", backgroundColor:"#394d7d", color:'white' }}
                                type="submit"
                                onClick={() => handleTransaction(product)}
                               
                              >
                                <ShoppingCartOutlinedIcon sx={{marginLeft: '-10px', marginRight: '2px',  }}/>
                                Add to Cart
                              </Button>

                          </Stack>
                        </StyledTableCell>
                    </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
            <Grid />
            </Box>
            </TabPanel>
        
            <TabPanel value="2">
            <h2 style={{ marginTop: "-15px", textAlign: "center",}}>Your Shopping Cart</h2>
            <p  style={{ marginTop: "-10px", textAlign: "center" }} >Total items ({transaction.length})</p>
            <Box
               height={500}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
            <Box
                p={4}
                overflow="auto"
                sx={{ width: "60%", border: "2px black" }}
             
            >
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  mb={1}
                  sx={{
                    textAlign: "center",
                  }}
                >
                <Grid item xs={12} sm={4} sx={{ marginLeft: '-30px' }}>
                    <Typography color={"black"} variant="h7">
                      Product Name
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3} sx={{marginLeft: '60px'}}>
                    <Typography color={"black"} variant="h7">
                      Quantity
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography color={"black"} variant="h7">
                     Total Price
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography color={"black"} variant="h7">
                      Action
                    </Typography>
                  </Grid>
                </Grid>
                <hr style={{}}/>
               
                {transaction.map((item, index) => (
                <React.Fragment key={index}>
                    <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    gutterBottom
                    mb={1}
                    textAlign= "center"
                    >
                    <Grid item xs={12} sm={1}>
                        <Checkbox
                        checked={item.checked}
                        onChange={() => handleCheckboxChange(item.id)}
                        />
                    </Grid>

                    <Grid item xs={12} sm={4} sx={{ textAlign: "start" }}>
                        <Typography variant="body1" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                       
                        {item.product}
                        </Typography>
                        <Typography variant="body2">
                        ₱ {item.price}.00
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={1.8}>
                        <Typography variant="body1">
                        {item.stocks}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2.1} sx={{textAlign: 'right', }}>
                        <Typography variant="body1">
                        ₱ {(item.price * item.stocks)}.00
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleRemoveItem(item.id)}
                        >
                        Remove
                        </Button>
                    </Grid>
                    </Grid>
                    {index < transaction.length - 1 && <hr style={{ margin: "10px 0",  }} />}
                </React.Fragment>
                ))}
            </Box>

            {/* This code is for place to order part */}
            <Box sx={{width: '40%', overflow: 'auto', marginTop: '-20px', backgroundColor: '#daeff2', marginLeft: '20px'}}>
            <h2 style={{textAlign: 'center', fontWeight: 'bold'}}>Your Items</h2>
            <Grid
              container
              spacing={2}
              alignItems="center"
              mb={3}
              sx={{ textAlign: "center",marginTop: '20px', textAlign: "center",
              justifyContent: "center", }}
            >
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  mb={1}
                  sx={{
                    textAlign: "center",
                    justifyContent: "center",  
                  }}
                >
                <Grid item xs={12} sm={4}>
                    <Typography color={"black"} variant="h7">
                      Product Name
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography color={"black"} variant="h7">
                      Quantity
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography color={"black"} variant="h7">
                     Total Price
                    </Typography>
                </Grid>
              </Grid>
              <hr style={{color: 'solid black', margin: "10px 0 ", width: "85%" }}/>
               
              {checkeditem.map((item, index) => (
              <React.Fragment key={index}>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  gutterBottom
                  mb={1}
                  textAlign= "center"
                  >
                  <Grid item xs={12} sm={4} sx={{ textAlign: "start", marginLeft: '8%' }}>
                    <Typography variant="body1" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                      {item.product}
                    </Typography>
                    <Typography variant="body2">
                      ₱ {item.price}.00
                     </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Typography variant="body1">
                      {item.stocks}
                   </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3.8} sx={{textAlign: 'right', }}>
                    <Typography variant="body1">
                      ₱ {(item.price * item.stocks)}.00
                      </Typography>
                  </Grid>
                    
                </Grid>
                {index < checkeditem.length - 1 && <hr style={{ margin: "10px 0", width: "85%" }}/>}
              </React.Fragment>
              ))}

              <Grid item xs={12} sm={12}>
                <Typography
                  variant="h5"
                  sx={{ marginLeft: "-88%",  textAlign: "start", marginLeft: '30px', fontWeight: 'bold'}}
                >
                  Subtotal: ₱  
                  {checkeditem.reduce(
                  (total, item) => total + item.price * item.stocks,
                    0
                  )}.00
                  </Typography>
              </Grid>

              <Grid item xs={12} sm={7} sx={{textAlign: 'start', marginLeft: '-32%',}}>
                <Button
                  variant="contained"
                  gutterBottom
                  sx={{ background: "black", '&:hover': { backgroundColor: "#424242", border: 'none' } }}
                  onClick={() => PlacetoOrder()}
                  disabled={isCheckoutDisabled || checkeditem.length === 0}
                
                >
                  Place to Order
                </Button>
              </Grid>
            </Grid>
            </Box>
          </Box>
          </TabPanel>
        </TabContext>
        <Snackbar
          open={successSnackbarOpen}
          autoHideDuration={500}
          onClose={handleCloseSuccessSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseSuccessSnackbar} p={5}  sx={{ width: '100%', backgroundColor: 'green', color: 'white'}}  
            iconMapping={{ success: <CheckCircleOutlineIcon style={{ color: 'white' }} /> }}
          >
            Item is added to cart successfully!
          </Alert> 
        </Snackbar>

        <Snackbar
          open={removeSnackbarOpen}
          autoHideDuration={1000}
          onClose={handleCloseRemoveSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseRemoveSnackbar} p={5}  sx={{ width: '100%', backgroundColor: 'red', color: 'white'}}  
            iconMapping={{ success: <CheckCircleOutlineIcon style={{ color: 'white' }} /> }}
          >
            Item is Removed to cart successfully!
          </Alert> 
        </Snackbar>
      </Box>
      </SnackbarProvider>
    </>
  );
}