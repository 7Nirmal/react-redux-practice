import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { cartactions } from "../store/cart-slice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
const items = useSelector(state=>state.cart.itemslist);
console.log(items);
const Addtocart =()=>{
  dispatch(cartactions.addtocart({name,id,price}))
}


  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={Addtocart}>Add to cart</button>
    </div>
  );
};

export default Product;
