import React from "react";
import Navbar from "../components/navbar";
import { Box } from "@mui/system";
import { Card, Grid, CardContent, Typography, CardActionArea } from '@mui/material';

export default function Home({ categ, productlist }) {
  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', }}>
        <Box component="main" sx={{ flexGrow: 1, p: 2,}}>
          <Grid container spacing={2}>
            {categ.map((category) => {
              // Filter products by category
              const categoryProducts = productlist.filter(
                (product) => product.categories === category.id
              );

              return (
                <Grid item xs={12} sm={2.3} key={category.id}>
                  <Card sx={{ maxWidth: 340, height: 150, justifyContent: "center", alignItems: "center" }}>
                    <CardActionArea sx={{ backgroundColor: "#0288d1" }}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ marginLeft: 2 }}>
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
          </Grid>
        </Box>
      </Box>
    </>
  );
}
