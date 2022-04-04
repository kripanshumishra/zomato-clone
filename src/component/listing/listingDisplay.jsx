import React from 'react'
import Listing from './listing.jsx'
import{useParams} from 'react-router-dom'
import Filter from '../filter/filter.jsx'
import Navbar from '../Header/navbar.jsx'
import './listing.css'
export default function ListingDisplay() {
    let params = useParams();
  return (  
    <>
    <Navbar/>
      <div className='row'>
        <div className='col-3 '>
          <Filter/>
        </div>
        <div className='col-9 '>
            <Listing mealId={params.mealId}/>
        </div>
    </div>
    </>
    
   
  )
}