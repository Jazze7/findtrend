import React from 'react'

// components
import Spotlight from './LandingPage/Spotlight'
import Tab from './LandingPage/Tab'
import Brands from './LandingPage/Brands'
import Tweet from './LandingPage/Tweet'


export default function HomePage() {
  return (
    <>
    <Spotlight/>
    <Tab/>
    <Brands/>
    <Tweet/>
    </>
  )
}