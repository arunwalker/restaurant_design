import React from 'react'

import { work } from '../../assets'
import './Work.css'

const Work = () => {
  return (
    <div id="work" className='work-wrapper'>
        <div className="work-container">
            <div className="work-image">
                <img src={work} alt="work-img" />
            </div>
            <div className="work-content">
                <h2>How we Work</h2>
                <div className="work-boxes">
                    <div className="work-box">
                        <h3>01</h3>
                        <p>Goods Order</p>
                        <span>Sample Text. Click to select the text element</span>
                    </div>
                    <div className="work-box">
                        <h3>02</h3>
                        <p>Confirmation</p>
                        <span>Sample Text. Click to select the text element</span>
                    </div>
                    <div className="work-box">
                        <h3>03</h3>
                        <p>Delivery</p>
                        <span>Sample Text. Click to select the text element</span>
                    </div>
                    <div className="work-box">
                        <h3>04</h3>
                        <p>Payment</p>
                        <span>Sample Text. Click to select the text element</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work