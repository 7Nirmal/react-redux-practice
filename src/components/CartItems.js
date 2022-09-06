import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartitems = useSelector(state=>state.cart.itemslist)
  return (
   <>
   {
    cartitems.quantity !==0 ?  <div className="cart-container">
    <h2>Your Cart</h2>

   <ul>
       {cartitems.map(item=>(<li key={item.id}>
         <CartItem item ={item}/>
       </li>
) )}
   </ul>
</div>
    :""}
   </>
  );
};

export default CartItems;
