import React from 'react'
import Search from './search.jsx'
import QuickDisplay from '../quickDisplay/quickDisplay.jsx'
import Navbar from './navbar.jsx'
export default function Home() {
  return (
   <>
   <Navbar/>
    <Search/>
    <QuickDisplay/>
   </>
  )
}
