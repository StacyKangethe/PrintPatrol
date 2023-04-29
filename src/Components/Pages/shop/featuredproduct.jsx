import React, { useContext, useState } from "react";
import { ShopContext } from '../../context/shop-context';
import { CardContent, CardMedia, Typography, createMuiTheme } from "@mui/material";
import Card from '@mui/material/Card';
import CardActionArea from "@mui/material/CardActionArea";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

type Props = {
  hoverShadow: number;
};

const options = {
  shouldForwardProp: (prop) => prop !== 'hoverShadow',
};

const StyledCard = styled(
  Card,
  options,
)<Card>(({ theme, hoverShadow = 1}) => ({
  ':hover': {
    boxShadow: theme.shadows[hoverShadow],
  },
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.9)' }}
  >
    .
  </Box>
);


export const Featured = (props) => {
  const { id, productName, price, image } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];


  const [active, setActive] = useState(false);

  return (
    <div style={{ textAlign: "center", color: "green" }} onClick={() => setActive(!active)}>
      <center>
        <Card 
          sx={{ 
            maxWidth: 345,
            ':hover': {
              boxShadow:20,
            },
          }} 
          variant="outlined">
          <CardActionArea >
            <CardMedia
              component="img"
              height="140" 
              src={image} 
              alt="Metropolis X PrintPatrol"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {productName}
              </Typography>
              <Typography variant="body2" component="div">
                KSh{price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </center>
    </div>
  );
};