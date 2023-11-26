import React from "react";
import Navbar from "../components/navbar";
import { Box } from "@mui/system";
import { Card, Grid, CardContent, Typography, CardActionArea, ListItemIcon } from '@mui/material';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import BallotSharpIcon from '@mui/icons-material/BallotSharp';
import PaidSharpIcon from '@mui/icons-material/PaidSharp';
import TimelineSharpIcon from '@mui/icons-material/TimelineSharp';
export default function Home({ categ, productlist }) {
  const totalProducts = productlist;
  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex',}}>
        <Box component="main" height={740}  sx={{ flexGrow: 1, p: 2, backgroundColor: 'white', }}>
          {/* <Grid container spacing={2}>
            {categ.map((category) => {
              // Filter products by category
             const categoryProducts = productlist.filter((product) => 
                product.category === category.categories
            );

              return (
             
                <Grid item xs={12} sm={2.3} key={category.id}>
                  <Card sx={{ maxWidth: 340, height: 150, marginTop: '20px', justifyContent: "center", alignItems: "center" }}>
                    <CardActionArea sx={{ backgroundColor: "#6D9886",}}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" ccomponent="div" sx={{color: 'white', marginLeft: 2 }}>
                          {category.categories}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActionArea>
                      <CardContent>
                        <CardContent>
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: 18 }}>
                            Total Products: {categoryProducts.length}
                          </Typography>
                        </CardContent>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
           
              );
            })}
          </Grid> */}

          <Grid container spacing={2}>
            {/* {categ.map((category) => {
              // Filter products by category
             const categoryProducts = productlist.filter((product) => 
                product.category === category.categories
            ); */}

              {/* return ( */}
             
                <Grid item xs={12} sm={3}>
                  <Card sx={{ maxWidth: 340, height: 150, marginTop: '20px', marginLeft: '25px', justifyContent: "center", alignItems: "center",  }}>
                    <CardActionArea sx={{ backgroundColor: "#01579b",}}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{color: 'white', marginLeft: 2 }}>
                          Products
                          {/* {category.categories} */}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActionArea>
                      <CardContent>
                        <CardContent>
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                justifyContent: 'center',
                                marginTop: '-6px'
                              }}
                              >
                              <LocalMallSharpIcon color="primary" sx={{fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center',  marginRight: '8px' }}/>
                              <Typography variant="body2" color="text.secondary" sx={{ fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px',}}>
                              {/* Total Products: {categoryProducts.length} */}
                              Total Products: {totalProducts.length}
                          
                              </Typography>
                            </ListItemIcon> 
                         
                        </CardContent>
                      </CardContent>
                      
                    </CardActionArea>
                  </Card>
                </Grid>
           
              {/* );
            })} */}

                <Grid item xs={12} sm={3}>
                  <Card sx={{ maxWidth: 340, height: 150, marginTop: '20px', marginLeft: '15px', justifyContent: "center", alignItems: "center" }}>
                    <CardActionArea sx={{ backgroundColor: "#00695c",}}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" ccomponent="div" sx={{color: 'white', marginLeft: 2 }}>
                          {/* {category.categories} */}
                          Categories
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActionArea>
                      <CardContent>
                        <CardContent>
                        <ListItemIcon
                              sx={{
                                minWidth: 0,
                                justifyContent: 'center',
                                marginTop: '-6px'
                              }}
                              >
                              <BallotSharpIcon  sx={{color: '#00796b', fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center',  marginRight: '8px' }}/>
                              <Typography variant="body2" color="text.secondary" sx={{ fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px'}}>
                              {/* Total Products: {categoryProducts.length} */}
                              Total Categories: {categ.length}
                          
                              </Typography>
                            </ListItemIcon> 
                        </CardContent>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <Card sx={{ maxWidth: 340, height: 150, marginTop: '20px', marginLeft: '15px', justifyContent: "center", alignItems: "center" }}>
                    <CardActionArea sx={{ backgroundColor: "#e64a19",}}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" ccomponent="div" sx={{color: 'white', marginLeft: 2 }}>
                          {/* {category.categories} */}
                          Transaction
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActionArea>
                      <CardContent>
                        <CardContent>
                          <ListItemIcon
                              sx={{
                                minWidth: 0,
                                justifyContent: 'center',
                                marginTop: '-6px'
                              }}
                              >
                              <PaidSharpIcon color="error" sx={{color: '#e65100', fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center',  marginRight: '8px' }}/>
                              <Typography variant="body2" color="text.secondary" sx={{ fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px',}}>
                              {/* Total Products: {categoryProducts.length} */}
                              Total Transaction: 
                          
                              </Typography>
                          </ListItemIcon> 
                        </CardContent>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <Card sx={{ maxWidth: 340, height: 150, marginTop: '20px', marginLeft: '15px',  justifyContent: "center", alignItems: "center" }}>
                    <CardActionArea sx={{ backgroundColor: "#ff9100",}}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" ccomponent="div" sx={{color: 'white', marginLeft: 2 }}>
                          {/* {category.categories} */}
                          Reports
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActionArea>
                      <CardContent>
                        <CardContent>
                          <ListItemIcon
                              sx={{
                                minWidth: 0,
                                justifyContent: 'center',
                                marginTop: '-6px'
                              }}
                              >
                              <TimelineSharpIcon color="error" sx={{color: '#ff9100', fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center',  marginRight: '8px' }}/>
                              <Typography variant="body2" color="text.secondary" sx={{ fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px',}}>
                              {/* Total Products: {categoryProducts.length} */}
                              Total Transaction: 
                          
                              </Typography>
                          </ListItemIcon> 
                        </CardContent>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
