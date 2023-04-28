import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { shopPost } from "../../products";
import { CartItem } from "./cart-item";
import { Link, useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
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
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

//Using MPESA API from mradi using this link https://mradi.co/printpatrol