import React from "react";
import './search.css'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const lurl= "https://novzomatoapi.herokuapp.com/location"
const surl= 'https://novzomatoapi.herokuapp.com/restaurants?stateid='

export default () => {
    const [location,SetLocation]= useState([])
    const [restaurant,SetRestaurant] = useState([])
    const navigate = useNavigate()
    const restaurant_data = (event)=>{
        let sId = event.target.value
        fetch(`${surl}${sId}`,{method:"GET"})
        .then(data => data.json())
        .then(data=>SetRestaurant(data))
    }
    useEffect (() => {
        fetch(lurl,{method:'GET'})
        .then(data=>data.json())
        .then(data=>SetLocation(data))
      }, []);
    
    const navigateRes = (event)=>{
        // navigate to restaurant
        navigate(`/detail/${event.target.value}`)
    }
    return (
        <>
            <div className="header-main ">
                <p className="fs-1 text-white fw-bolder mt-5 pt-5" style={{ lineHeight: 0.5 }} >ZOMATO</p>
                <p className="fs-3 text-white fw-bold">Discover the best food & drinks in Lucknow</p>
                <div className="search-container-wrapper" >

                    <div className="search-container mt-5">

                        <div className="city-search">
                            <label htmlFor="cars"><i className="fa-solid fa-location-dot fav-icon text-danger"></i></label>
                            <select name="restaurant" id="restaurant" onChange={restaurant_data} >
                            <option>---select---</option>
                                {location.map(e=>{
                                    return <option value={e.state_id} key={e.state_id}>{e.state}</option>
                                })}
                            </select>
                        </div>
                        <div className="line" ></div>
                        <div className="restaurant-search">
                            <label htmlFor="cars"><i className="fas fa-search fav-icon text-muted"></i></label>
                            <select name="restaurant" id="restaurant" onChange={navigateRes}>
                                <option>---select---</option>
                                {restaurant.map(e=>{
                                    return <option value={e.restaurant_id} key={e.restaurant_id}> {e.restaurant_name} | {e.address}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}