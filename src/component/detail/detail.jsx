import React from "react";
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import "./detail.css";
import ResMenu from '../resMenu/resMenu.jsx'
import Navbar from "../Header/navbar";

// react tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const dUrl = "https://novzomatoapi.herokuapp.com/details";

export default function Detail() {
  
  // react-router-dom hooks
  let params = useParams();



  const [resData, SetresData] = useState([]);
  useEffect(() => {
    fetch(`${dUrl}/${params.resId}`, { method: "GET" })
      .then((data) => data.json())
      .then((data) => SetresData(data))
  }
, []);

  if (resData && resData.length > 0) {
    return (
      <>
           <Navbar/>
        {resData.map((e) => {
          return (
            <main className="container-detail" key={e.restaurant_id}>
              {/* <!-- Left Column / Headphones Image --> */}
              <div className="left-column">
                <img src={e.restaurant_thumb} alt="" />
              </div>

              {/* <!-- Right Column --> */}
              <div className="right-column">
                {/* <!-- Product Description --> */}
                <div className="product-description">
                  <span>{e.rating_text}</span>
                  <h1>{e.restaurant_name}</h1>
                  <p>
                    “One cannot think well, love well, sleep well, if one has
                    not dined well.” “Anything is good if it's made of
                    chocolate.” Pull up a chair.
                  </p>
                </div>

                {/* <!-- Product Pricing --> */}
                <div className="product-price text-danger">
                  <span> Price Rs. {e.cost}</span>
                </div>
                <p classNameName="fs-1 text mt-4">We Provide Best Service</p>
                <div>
                  <div className="icons">
                    <img
                      src="https://i.ibb.co/2FbpqtH/sentizied.jpg"
                      alt="sentizied"
                    />
                  </div>
                  <div className="icons">
                    <img src="https://i.ibb.co/s56LLF9/homedelivery.png" />
                  </div>
                </div>
                <Tabs>
                  <TabList>
                    <Tab>Details</Tab>
                    <Tab>Contact</Tab>
                  </TabList>

                  <TabPanel>
                    <p className="fs-4">{e.restaurant_name}</p>
                    <p>
                      <b>{e.restaurant_name}</b> is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been
                      
                    </p>
                  </TabPanel>
                  <TabPanel>
                    <p>{e.address}</p>
                    <p>Phone: {e.contact_number?e.contact_number: '+91-6748838383'}</p>
                  </TabPanel>
                </Tabs>
                
              </div>
            </main>       
          );
        })}
        
        <ResMenu resId={resData[0].restaurant_id}/>
        
      </>
    );
  } else {
    <Navbar/>
    return <h1>pls wait while we are fetching the data</h1>;
  }
}