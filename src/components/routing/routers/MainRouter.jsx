import React from 'react'

// packages
import { Route, Routes } from "react-router-dom";

// components
import HomePage from '../../screens/HomePage';

export default function MainRouter() {
  return (
  <Routes>
    <Route  exact path="/" element={<HomePage/>}></Route>
  </Routes>
  )
}
