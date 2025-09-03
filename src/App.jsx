import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/home/home';
import Signin from './component/signin-page/signin';
import SignUp from './component/sign-up/signup';
import Show from './component/show-user/Show';
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/profile" element={<Show/>} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
