import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartactions } from "../store/cart-slice";
const CartItem = ({item}) => {
  const dispatch = useDispatch();
  const removeHandler = (id) => {
    dispatch(cartactions.removefromcart(id));
  };
  const addHandler = (id,name,price) => {
    dispatch(
      cartactions. addtocart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className="cartItem">
      <h2> {item.name}</h2>
      <p>${item.price} /-</p>
      <p>x{item.quantity}</p>
      <article>Total ${item.totalprice}</article>
      <button className="cart-actions" onClick={()=>removeHandler(item.id)} >
        -
      </button>
      <article>Total ${item.totalprice}</article>

      <button className="cart-actions" onClick={()=>addHandler(item.id,item.name,item.price)} >
        +
      </button>
    </div>
  );
};

export default CartItem;
