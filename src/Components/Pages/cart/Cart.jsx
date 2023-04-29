import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { shopPost } from "../../data";
import { CartItem } from "./cart-item";
import { Link, useNavigate } from "react-router-dom";
import Box  from "@mui/material/Box";
import "./cart.scss";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }} justifyContent="center">
      <div className="cart">
        <div>
          <h2>Your Cart Items</h2>
        </div>
        <div className="cart">
          {shopPost.map((post) => {
            if (cartItems[post.id] !== 0) {
              return <CartItem data={post} />;
            }
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p> Pay: KSh{totalAmount} </p>
            <button onClick={() => navigate("/shop")}> Continue Shopping </button>
            <Link to="https://mradi.co/printpatrol">
              <button>Checkout</button>
            </Link>
          </div>
        ) : (
          <h4>Empty</h4>
        )}
      </div>
    </Box>
    </ThemeProvider>
  );
};

//Using MPESA API from mradi using this link https://mradi.co/printpatrol