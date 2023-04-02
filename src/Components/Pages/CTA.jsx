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
import { useSpring, animated } from "react-spring";

const cards = [1, 2, 3];

const theme = createTheme();

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

function CTA() {
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
              paddingTop={8}
              gutterBottom
            >
              What is Glass THRIFT?
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            We are building a circular eco-system for glass recycling in Kenya. By collaborating with individuals and companies, we facilitate the collection of unwanted bottles and glasses for recycling to save our landfills and create jobs. Let’s recycle glass waste.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Learn How</Button>
            </Stack>
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
                        Nairobi
                    </Typography>
                    </Toolbar> 

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h2" component="h2" color="secondary">
                    <Number n={5000} />
                  </Typography>
                  <Typography gutterBottom>
                   
                  </Typography>
                  <Typography gutterBottom>
                  Bottles Collected
                  </Typography>
                   
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
    </ThemeProvider>

    );
}




export default CTA;