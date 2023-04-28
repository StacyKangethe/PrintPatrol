import React, { useContext, useState } from "react";
import { ShopContext } from '../../context/shop-context';
import { CardContent, CardMedia, Typography, createMuiTheme } from "@mui/material";
import Card from '@mui/material/Card';


export const Featured = (props) => {
  const { id, productName, price, image } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];


  const [active, setActive] = useState(false);


  return (
    <div onClick={() => setActive(!active)}>
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia component="img" sx={{
        // 16:9
        height: 300,
      }}
       src={image} />
      <CardContent sx={{ flexGrow: 1 }} justify-content="center">
      <Typography gutterBottom variant="h5" component="div">
        {productName}
      </Typography>
      <Typography gutterBottom variant="h7" component="div">
        KSh{price}
      </Typography>
      </CardContent>
    </Card>
    </div>
  );
};