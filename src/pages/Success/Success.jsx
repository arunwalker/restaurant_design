import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { schoolPride } from '../../utils/confetti'
import './Success.css'

const Success = () => {

  useEffect(() => {
    schoolPride();
  }, [])

  return (
    <div className='success-wrapper'>
        <div className="success-container">
            <div className="success-content">
              <h3>Thanks for your Order!</h3>
              <p>We deeply thank you for your order. We kindly hope that you will have your taste buds sharpen</p>
              <Link to="/">
                <button type="button">Continue Exploring</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Success