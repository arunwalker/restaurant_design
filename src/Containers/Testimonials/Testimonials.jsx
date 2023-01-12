import React from 'react'
import TestimonialCard from '../../Components/TestimonialCard'

import { testimonials } from '../../utils'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div id="testimonials" className='test-wrapper'>
        <div className="test-container">
            <h2>What People Say?</h2>
            <div className="test-cards">
                <div className="test-card">
                    {testimonials.map((item, index) => (
                        <TestimonialCard item={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials