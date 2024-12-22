import React from 'react'
import "./Styles/Home.css";

import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
          
      <div className='backbrnd p-1'>
        
          <div className="text-center">
            <h1 className="banner-heading mb-3">Get Delicious Food Anytime</h1>
            <p className="banner-caption mb-4">Eat Smart <span>& Healthy</span></p>
            <button className="custom-button"><NavLink to="/products" style={{textDecoration:"none", color:"white"}}>Explore Menu</NavLink></button>
            <button className="custom-outline-button">Order Now</button>
          </div>
        
      </div>

      <div className="healthy-food-section pt-5 pb-5">
          <div className="container">
              <div className="row">
                  <div className="col-12 col-md-5">
                      <div className="text-center">
                          <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/healthy-food-plate-img.png" alt="hello1" className="healthy-food-section-img" />
                      </div>
                  </div>
                  <div className="col-12 col-md-7">
                      <h1 className="healthy-food-section-heading">
                          Fresh, Healthy, Organic, Delicious Fruits
                      </h1>
                      <p className="healthy-food-section-description">
                          Say no to harmful chemicals and go fully organic with our range of
                          fresh fruits and veggies. Pamper your body and your senses with
                          the true and unadulterated gifts from mother nature. with the true
                          and unadulterated gifts from mother nature.
                      </p>
                      <button className="custom-button">Watch Video</button>
                  </div>
              </div>
          </div>
      </div>

      <div className="follow-us-section pt-5 pb-5" id="followUsSection">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <h1 className="follow-us-section-heading">Follow Us</h1>
                  </div>
                  <div className="col-12">
                      <div className="d-flex flex-row justify-content-center">
                          <div className="follow-us-icon-container">
                              <i className="fab fa-twitter icon"></i>
                          </div>
                          <div className="follow-us-icon-container">
                              <i className="fab fa-instagram icon"></i>
                          </div>
                          <div className="follow-us-icon-container">
                              <i className="fab fa-facebook icon"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
    </div>
    
  )
}

export default Home
