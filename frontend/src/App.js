import React from 'react'
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {LoginPage,SignupPage, HomePage} from "./Routes.js";


const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route parth="" element={<HomePage />} />
      <Route  path='/login' element={<LoginPage/>} />
      <Route  path='/sign-up' element={<SignupPage/>} >
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App