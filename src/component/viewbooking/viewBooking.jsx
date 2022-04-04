import React from "react";
import { Link, useEffect, useParams } from "react-router-dom";
import queryString from "query-string";

export default function ViewBooking() {
  const queryParams = queryString.parse(window.location.search);

//   console.log(queryParams);

  return (
    <div className="form">
      <div className="app-form-outer-container ">
        <div className="login-form panel panel-primary">
          <center>
          <p className="h1 fw-bold mb-5">{queryParams.status}</p>
          <p className="h5">{`your orderId is : ${queryParams.ORDERID}`}</p>
          <Link to={"/"}>
            
            <button className=" submit-btn btn ">Home</button>
          </Link>
          </center>
        </div>
      </div>
    </div>
  );
}
