import React from "react";
import Box  from "@mui/material/Box";
import { Button } from "@mui/material";
import Navbar from "../Navbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();


function DropOffPoints() {
    return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
     <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
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
              paddingTop={12}
              gutterBottom
            >
              Drop-Off Points
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Are you looking to dispose-off the bottles at your premise? Scroll through the locations and find your closest collection point. If too bulky or too many beyond your comfort, request for a pick up using the form.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', padding: theme.spacing(3), display: 'flex', flexDirection: 'column' }}
              >           
                    <Toolbar sx={{ flexGrow: 1 }} color="secondary">
                    <LocationOnIcon sx={{ mr: 2 }} />
                    <Typography variant="h5" align="center" color="text.secondary">
                        LOCATION 
                    </Typography>
                    </Toolbar> 

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Terms & Conditions
                  </Typography>
                  <Typography gutterBottom>
                  Mon-Friday: 8.00Am-5.00pm<br></br>  
                  </Typography>
                  <Typography gutterBottom>
                  Accepts only bottles
                  </Typography>
                   
                </CardContent>
                <CardActions>
                  <Button size="small">Call</Button>
                  <Button size="small">Message</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
    </ThemeProvider>

    );
}




export default DropOffPoints;