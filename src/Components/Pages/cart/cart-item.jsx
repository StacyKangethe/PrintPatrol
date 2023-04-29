import React, { useContext } from "react";
import { ShopContext } from '../../context/shop-context';
import Box from '@mui/material/Box';

export const CartItem = (props) => {
  const { id, productName, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }} justifyContent="center">
      <div className="cartItem">
      <img src={image} alt=""/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: KSh{price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
      </div>
    </Box>
  );
};