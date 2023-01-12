import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

import { homeImage } from '../../assets'
import './Home.css'; 
const Home = () => {
  return (
    <div id="home" className="home-wrapper">
      <div className="home-container">
        <div className="home-container-content">
          <div className="home-title">
            <h3>Wonder's Cake and Desserts for your holiday</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className="home-title-socials">
              <BsFacebook /> 
              <BsInstagram />
              <BsTwitter />
            </div>
          </div>
          <div className="home-image-container">
            <div className='home-image'>
              <img src={homeImage} alt="homeImage" />
            </div>
          </div>
          <div className="home-desc">
            <h4>$150</h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <a href="#catalog"><button type='button'>Read More</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home