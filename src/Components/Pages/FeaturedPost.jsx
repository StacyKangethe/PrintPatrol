import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const FeaturedPost = (props) => {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
            This is Slot 1 {props.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            November 14 {props.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
            Description {props.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading... 
            </Typography>
          </CardContent>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
            This is Slot 1 
            
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            December 30
            </Typography>
            <Typography variant="subtitle1" paragraph>
            Description
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
            This is Slot 1 
            
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            December 30
            </Typography>
            <Typography variant="subtitle1" paragraph>
            Description
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={props.image}
            alt={props.imageLabel}
            
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
};

FeaturedPost.propTypes = [
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