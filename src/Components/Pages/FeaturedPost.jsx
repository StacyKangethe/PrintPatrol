import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Navbar from '../Navbar';
import Shop from './Shop';
import Box  from "@mui/material/Box";
import Container from "@mui/material/Container";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Toolbar from "@mui/material/Toolbar";
import CardActions from '@mui/material/CardActions';
import { Button } from "@mui/material";
import { createTheme } from '@mui/material/styles';

const cards = [1, 2, 3, 4, 5, 6];

const theme = createTheme();

const FeaturedPost = (props) => {
  return (
    
    <Grid item xs={12} md={6}>
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
              paddingTop={4}
              gutterBottom
            >
              Our Certified Companies
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Our process involves working with waste collectors both individual and companies, recycling companies and glass manufacturing plants. The collectors ensure the glass waste reaches the factories where waste is sorted. And the glass manufacturing plants recycle the glass to manufacture new bottles and glasses. 
            </Typography>
          </Container>
        </Box>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography paddingTop={4}
              gutterBottom component="h2" variant="h5">
            Collected Glass{props.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            ------------------------------- {props.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
            Our Certified<br></br>Collectors{props.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Explore 
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image="https://source.unsplash.com/random"
            alt="random"
           />
          <CardContent sx={{ flex: 1}}>
            <Typography component="h2" variant="h5">
            Processing In Factory 
            
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            -------------------------------
            </Typography>
            <Typography variant="subtitle1" paragraph>
            Recycling and Waste Management Companies
            </Typography>
            <Typography variant="subtitle1" color="primary">
            Explore
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image="https://source.unsplash.com/random"
            alt="random"
           />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
            Color Sorted Glass Crusher
            
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            -------------------------------
            </Typography>
            <Typography variant="subtitle1" paragraph>
            Glass Manufacturing Plants
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Explore
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image="https://source.unsplash.com/random"
            alt="random"
           />
      
        </Card>
      </CardActionArea>
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
    </Grid>
    
  );
};

FeaturedPost.props = [
{
    title: 'Featured post',
    date: 'Nov 12',
    description:'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];





export default FeaturedPost;