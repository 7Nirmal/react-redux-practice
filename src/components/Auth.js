import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authactions } from "../store/auth-slice";

import "./Auth.css";

const Auth = () => {

  const[email,setEmail] = useState([]);
  const [password,setPassword] = useState([]);

const dispatch = useDispatch();
  const handleSubmit =() =>{
    fetch("http://localhost:5000/user/login",{method:"POST",body:JSON.stringify({email:email,password:password}),headers:{'Content-Type':'application/json'}})
    .then(data=>data.json()).then((response)=>{if(response.token){
      dispatch( authactions.login({token:response.token,email:response.email}))
    }else{alert(response.message)}});
  }
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <div >
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id"  onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
        <button className="login-btn" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Auth;
