import React, { useState, useEffect } from 'react';
import Navbar from "../components/navbar";
import { Box } from "@mui/system";
import { Card, Grid, CardContent, Typography, CardActionArea, ListItemIcon } from '@mui/material';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import BallotSharpIcon from '@mui/icons-material/BallotSharp';
import PaidSharpIcon from '@mui/icons-material/PaidSharp';
import TimelineSharpIcon from '@mui/icons-material/TimelineSharp';
import { BarChart} from '@mui/x-charts';
import { LineChart } from '@mui/x-charts/LineChart';
import Chart from 'react-apexcharts';



// import {BarChart}  from '@mui/x-charts/BarChart';

export default function Home({ categ, productlist, orderHistory }) {
  const totalProducts = productlist;

  const TotalSales = orderHistory.reduce((totalPrice, sale) => {
    const sales = sale.items.reduce((totalSales, item) => {
      const total = (parseInt(item.price )* parseInt(item.stocks ) || 0); 
      return totalSales + total
    }, 0);
    return totalPrice + sales;
  }, 0)


  const products = [...new Set(orderHistory.flatMap(sale => sale.items.map(item => item.product)))];
  const optionsBar = {
    chart: {
      id: 'basic-bar',
      height: 350,
    },
    colors: ['#008FFB'],
    plotOptions: {
      bar: {
        borderRadius: 5,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
    },
    xaxis: {
      categories: products,
    },
    yaxis: {
      title: {
        text: 'Number of Items Sold',
      },
    },
  };
  const seriesBar = [{
    name: 'Sales',
    data: products.map(product => {
      return orderHistory
        .flatMap(sale => sale.items)
        .filter(item => item.product === product) 
        .reduce((toalPrice, items) => toalPrice + (items.stocks * items.price || 0), 0)
    }),
  }];
  
  const uniqueCategories = [...new Set(productlist.map(p => p.category))];
  const hasStocks = uniqueCategories.some(category => {
    const stocksData = productlist.filter(p => p.category === category).map(p => p.stocks);
    return stocksData.some(stock => stock > 0);
  });

  const options = {
    chart: {
      id: "basic-bar"
    },
    stroke: {
      curve: 'smooth',
    },
    animate: {
      duration: 1000, // Animation duration in milliseconds
      easing: 'easeInOut', // Easing function for the animation
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.5,
        opacityTo: 0.6,
      }
    },
    dataLabels: {
      enabled: false
    },
    annotations: {
      annotations: {
          yaxis: [
            {
              y: 50, // Adjust this value based on where you want the first line
              borderColor: '#FF0000', // Color of the first line
              label: {
                borderWidth: 0,
                style: {
                  color: '#fff', // Color of the label text for the first line
                },
              },
            },
            {
              y: 75, // Adjust this value based on where you want the second line
              borderColor: '#00FF00', // Color of the second line
              label: {
                borderWidth: 0,
                style: {
                  color: '#fff', // Color of the label text for the second line
                },
              },
            },
            // Add more objects for additional lines as needed
          ],
        }
    }
  };
  const series = uniqueCategories.map(category => ({
    name: category,
    type: 'area',
    data: productlist
      .filter(p => p.category === category)
      .map(p => p.stocks),
    // area: true,
  label:  `${category}`,
  }));

  return (
    <>
      <Navbar />
      <Box display={"flex"}>
        <Box component="main" height={230}  sx={{ flexGrow: 1, p: 2, }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 340, height: 150, marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 0 }}>
                <CardActionArea sx={{ backgroundColor: "#0288d1",}}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: 'white', marginLeft: 2 }}>
                       Products
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

            <Grid item xs={12} sm={3}>
              <Card sx={{ maxWidth: 340, height: 150, marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 0 }}>
                <CardActionArea sx={{ backgroundColor: "#00796b",}}>
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
                          Total Categories: {categ.length}
                            
                        </Typography>
                      </ListItemIcon> 
                    </CardContent>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Card sx={{ maxWidth: 340, height: 150, marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 0 }}>
                <CardActionArea sx={{ backgroundColor: "#9c27b0",}}>
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
                          <PaidSharpIcon sx={{color: '#9c27b0', fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center',  marginRight: '8px' }}/>
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px',}}>
                              {/* Total Products: {categoryProducts.length} */}
                              Total Transaction: {orderHistory.length}
                          
                          </Typography>
                      </ListItemIcon> 
                    </CardContent>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Card sx={{ maxWidth: 340, height: 150, marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 0,}}>
                <CardActionArea sx={{ backgroundColor: "#4a148c",}}>
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
                          <TimelineSharpIcon sx={{color: '#4a148c', fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center',  marginRight: '8px' }}/>
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px',}}>
                              {/* Total Products: {categoryProducts.length} */}
                              Total Sales: ₱{TotalSales.toFixed(2)}
                          </Typography>
                      </ListItemIcon> 
                    </CardContent>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <Card height={450} MaxWidth={500}  overflow="auto"   sx={{  marginTop: '20px',  justifyContent: "center", alignItems: "center", }}>
                {
                    //   <BarChart
                  //   xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C',] }]}
                  //   series={[{ data: [4, 3, 5, ] }, { data: [1, 6, 3, ] }, { data: [2, 5, 6] }, { data: [2, 2, 6] }, ]}
                  //   MaxWidth={900}
                  //   height={474}
                  //   overflow="auto"  
                  //   sx={{color: 'white'}}
                  // />
                  <Chart
                    options={optionsBar}
                    series={seriesBar}
                    type="bar"
                    MaxWidth={620}
                    height={462}
                  />
                } 
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
            <Card height={450} maxWidth={100} overflow="auto"  sx={{  marginTop: '20px',  justifyContent: "center", alignItems: "center", marginRight: "30px" }}>
              {hasStocks ? (
              //    <LineChart
              //    options={options}
              //    series={series}
              //    MaxWidth={620}
              //    height={474}
                 
              //  />
               <Chart
                options={options}
                series={series}
                type="line"
                MaxWidth={620}
                height={462}
              />
              ):(
                <Typography variant="body2" color="text.secondary"  sx={{height: '470px', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px', }}>
                No stocks available.
              </Typography>
              )}
             
               
              </Card>
            </Grid>
          </Grid>
        </Box>  
      </Box>
    </>
  );
}
