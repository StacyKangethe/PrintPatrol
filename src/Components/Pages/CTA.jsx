import React from "react";
import Box  from "@mui/material/Box";
import { Button, Tab, Tabs, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from "react-router-dom";
import { shopPost } from "../products";
import { Featured } from "./shop/featuredproduct";
import Newsletter from "../Newsletter";

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

  const breakPoint = useMediaQuery("(min-width:600px)");

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
        
        <Box sx={{ bgcolor: '#FF3131', pb: 8, pt: 6 }}>
              <Typography
                component="h1"
                variant="h7"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Our Featured Products
              </Typography>
              <Tabs
                textColor="primary"
                indicatorColor="primary"
                // value={music}
               // onChange={handleChange}
                centered
                TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none"} }}
                sx={{
                  m: "25px",
                  "& .MuiTabs-flexContainer": {
                    flexWrap: "wrap"
                  }
                }}
              >
                <Tab label="Metropolis x Print Patrol" value="music" />
              </Tabs>
          <Box
            margin="40px"
            display="grid"
            gridTemplateColumns="repeat(autofill)"
            justifyContent="space-around"
            rowGap="20px"
            columnGap="1%"
          >
            <Grid container spacing={4} justifyContent="center">
            {shopPost.map((post) => (
              <div key={post.id} style={{ padding:"0.5em", display:"flex", flexDirection:"column", justifyContent:"center" }}>
                  <Featured data={post} />
              </div>
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