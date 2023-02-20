import React from 'react'

// packages
import { Route, Routes } from "react-router-dom";

// components
import Spotlight from '../../screens/LandingPage/Spotlight';

export default function MainRouter() {
  return (
  <Routes>
    <Route  exact path="/" element={<Spotlight/>}></Route>
  </Routes>
  )
}
