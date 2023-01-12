import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'; 


import { Navbar, Home, About, Catalog, Work, Faqs, Testimonials, Contact} from './Containers'


const App = () => {
  return (
    <>
          <Navbar />
          <Home /> 
          <About />
          <Catalog />
          <Work />
          <Faqs />
          <Testimonials />
          <Contact />
    </>
  )
}

export default App