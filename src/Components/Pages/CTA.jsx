import React from "react";
import Box  from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from "react-router-dom";
import { shopPost } from "../products";
import { Featured } from "./shop/featuredproduct";

const itemData = [
  {
    img: 'apparel.png',
    title: 'Apparel',
    featured: true,
  },
  {
    img: 'bottle.png',
    title: 'Home Accessories',
    featured: true,
  },

];

const theme = createTheme();


function CTA() {
    return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'Background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                420 Ganja Farm
              </Typography>
              <Typography variant="h6" align="center" color="text.inherit" paragraph>
                Welcome to Print Patrol's inaugural collection that drops today with a bhang! How timely is it that we get to embark on our journey on such a high note? Keep <b>scrolling</b>.
              </Typography>
              <Link to="/shop">
                <Button variant="contained"color="inherit">Check out our exclusive 4/20 merch</Button>
              </Link>
          </Container>
        </Box>
        
        <Box sx={{ bgcolor: '#FFFFFF'}} maxWidth="md" margin="80px">
        <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                420 Collection
              </Typography>
          <Box
            margin="0 auto"
            display="grid"
            gridTemplateColumns="repeat(autofill)"
            justifyContent="space-around"
            rowGap="20px"
            columnGap="1.33%"
          >
            <Grid container spacing={4}>
            {shopPost.map((post) => (
              <Grid item xs={12} sm={6} md={4}>
                <Featured data={post} />
              </Grid>
            ))}
          </Grid>
          </Box>
        </Box>
        
        {/* End hero unit */}
      </main>
    </ThemeProvider>
    
    
    
    
    
    
    
    
   

    );
}




export default CTA;