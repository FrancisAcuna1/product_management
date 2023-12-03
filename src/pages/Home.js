import React from 'react';
import Navbar from "../components/navbar";
import { Box } from "@mui/system";
import { Card, Grid, CardContent, Typography, CardActionArea, ListItemIcon } from '@mui/material';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import BallotSharpIcon from '@mui/icons-material/BallotSharp';
import PaidSharpIcon from '@mui/icons-material/PaidSharp';
import TimelineSharpIcon from '@mui/icons-material/TimelineSharp';
import { BarChart} from '@mui/x-charts';
import { LineChart } from '@mui/x-charts/LineChart';

// import {BarChart}  from '@mui/x-charts/BarChart';

export default function Home({ categ, productlist }) {
  const totalProducts = productlist;
  // const data = {
  //   labels: productlist.map(o => o.name),
  //   datasets: [
  //     {
  //       label: 'Products',
  //       backgroundColor: 'rgba(0, 255, 0, 0.2)',
  //       borderColor: 'rgb(0, 255, 0)',
  //       borderWidth: 1,
  //       data: productlist.map(o => o.stock)
  //     }
  //   ]
  // };
  // const options = {
  //   plugins: {
  //   title: {
  //   display: true,
  //   text: 'Bar Chart'
  //   }
  // }
  // }
  // const barChartData = {
  //   xAxis: { dataKey: 'name', type: 'category' },
  //   yAxis: {},
  //   series: [{ dataKey: 'stock', fill: '#8884d8', name: 'Products' }],
  // };
  



  return (
    <>
      <Navbar />
      <Box display={"flex"}>
        <Box component="main" height={230}  sx={{ flexGrow: 1, p: 2, }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Card sx={{ maxWidth: 340, height: 150, marginTop: '20px', justifyContent: "center", alignItems: "center",  }}>
                <CardActionArea sx={{ backgroundColor: "#01579b",}}>
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
              <Card sx={{ maxWidth: 340, height: 150, marginTop: '20px', justifyContent: "center", alignItems: "center" }}>
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
                          Total Categories: {categ.length}
                            
                        </Typography>
                      </ListItemIcon> 
                    </CardContent>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Card sx={{ maxWidth: 340, height: 150, marginTop: '20px', justifyContent: "center", alignItems: "center" }}>
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
              <Card sx={{ maxWidth: 340, height: 150, marginTop: '20px', justifyContent: "center", alignItems: "center" }}>
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

          <Grid container spacing={2}>
            <Grid item xs={12} sm={7}>
            <Card height={450} width={500}  sx={{  marginTop: '20px',  justifyContent: "center", alignItems: "center" }}>
                <BarChart
                      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C',] }]}
                      series={[{ data: [4, 3, 5, ] }, { data: [1, 6, 3, ] }, { data: [2, 5, 6] }, { data: [2, 2, 6] }]}
                      width={900}
                      height={400}
                    />
              </Card>
            </Grid>

            <Grid item xs={12} sm={5}>
            <Card height={450} width={100}  sx={{  marginTop: '20px',  justifyContent: "center", alignItems: "center", marginRight: "30px" }}>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
                series={[
                  {
                    data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8,],
                    showMark: ({ index }) => index % 2 === 0,
                  },
                ]}
                width={600}
                height={400}
              />
              </Card>
            </Grid>
          </Grid>
        </Box>  
      </Box>
    </>
  );
}
