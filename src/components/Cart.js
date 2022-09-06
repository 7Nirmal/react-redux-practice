import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartactions } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  const quantity = useSelector(state=>state.cart.totalquantity);
  const dispatch = useDispatch();
  const showcart =() =>{
    dispatch(cartactions.setshowcart());
  } 
  return (
    <div className="cartIcon">
      <h3 onClick={showcart}>Cart: {quantity} Items</h3>
    </div>
  );
};


export default Cart;
