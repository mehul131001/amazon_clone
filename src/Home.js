import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Lean Startup: How to Apply the Lean Startup Methodology to Innovate, Accelerate..."
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-Beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71-gH4PaOvL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="49538095"
            title="Apple Watch Series 6 (GPS, 40mm) - Gold Aluminum Case with Pink Sand Sport Band "
            price={349.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71aLryIN+ZL._AC_SL1500_.jpg"
          />
          <Product
            id="49538024"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61A6bOdVrHS._AC_SL1000_.jpg"
          />
          <Product
            id="49538044"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver ( 4th Generation)"
            price={598.99}
            rating={4}   
            image="https://m.media-amazon.com/images/I/815KnP2wjDS._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
        <Product
            id="49538095"
            title="Samsung LC4RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SL1000_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
