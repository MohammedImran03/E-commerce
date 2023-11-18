import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage,Signuppage,ActivationPage,HomePage} from "./Routes.js"; 
import store from "./store";
import {loadUser } from "./Redux/action/user";
const App=()=>{
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<HomePage />} />
    <Route path="/signin" element={<LoginPage />}/>
    <Route path="/sign-up" element={<Signuppage />}/>
    <Route path="/activation/:activation_token" element={<ActivationPage />}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
