import React from "react";
import Navbar from "./navbar";
import './Header.css'
export default () => {
    return (
        <>
            <Navbar />
            <div className="header-main ">
                <p className="fs-1 text-white fw-bolder mt-5 pt-5" style={{ lineHeight: 0.5 }} >ZOMATO</p>
                <p className="fs-3 text-white fw-bold">Discover the best food & drinks in Lucknow</p>
                <div className="search-container-wrapper" >

                    <div className="search-container mt-5">

                        <div className="city-search">
                            <label for="cars"><i class="fa-solid fa-location-dot fav-icon text-danger"></i></label>
                            <select name="restaurant" id="restaurant">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className="line" ></div>
                        <div className="restaurant-search">
                            <label for="cars"><i class="fas fa-search fav-icon text-muted"></i></label>
                            <select name="restaurant" id="restaurant">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}