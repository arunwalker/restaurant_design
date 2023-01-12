import React, { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'

import { logo } from '../../assets'
import './Navbar.css';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img className='navbar-image' src={logo} alt="logo" />  Wonder Cakes
        </a>
        <button className="navbar-toggler" onClick={() => setToggle(true)} type="button">
          <HiMenuAlt3 />
        </button>
        {toggle && (
          <div className='navbar-toggle-menu'>
            <HiX className='navbar-toggle-close' size={25} onClick={() => setToggle(false)} />
            <div className='navbar-toggle-menu-items'>
              <ul>
                <li><a href="#home" onClick={() => setToggle(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setToggle(false)}>About</a></li>
                <li><a href="#catalog" onClick={() => setToggle(false)}>Catalog</a></li>
                <li><a href="#work" onClick={() => setToggle(false)}>Work</a></li>
                <li><a href="#faqs" onClick={() => setToggle(false)}>FAQ's</a></li>
                <li><a href="#testimonials" onClick={() => setToggle(false)}>Testimonials</a></li>
                <li><a href="#contact" onClick={() => setToggle(false)}>Order</a></li>
              </ul>
            </div>
            <div className='navbar-toggle-menu-items-social'>
              <AiFillFacebook />
              <AiOutlineInstagram />
              <BsPinterest />
            </div>
          </div>
        )}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav navbar-flex">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#catalog">Catalog</a>
            <a className="nav-link" href="#work">Work</a>
            <a className="nav-link" href="#faqs">FAQ's</a>
            <a className="nav-link" href="#testimonials">Testimonials</a>
            <a className="nav-link" href="#contact">Order</a>  
        </div>
        </div>
    </div>
    </nav>
  )
}

export default Navbar