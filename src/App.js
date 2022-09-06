import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  const isloggedin = useSelector(state=>state.auth.isloggedin);
  return (
    <div className="App">
     {!isloggedin && <Auth />} 
     {isloggedin && <Layout />}
    </div>
  );
}

export default App;
