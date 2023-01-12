import React from 'react'

import Accordian from '../../Components/Accordian'
import CatalogCard from '../../Components/CatalogCard/CatalogCard'
import { accordionData } from '../../utils'
import { CatalogMenu } from '../../utils'
import './Faqs.css'

const Faqs = () => {

  return (
    <>
    <div id="faqs" className='faqs-wrapper'>
        <h2>Frequently Asked Questions</h2>
        <div className="accordion">
        {accordionData.map(({ title, content }) => (
            <Accordian title={title} content={content} key={title}/>
        ))}
        </div>
    </div>
    <div className='best-wrapper'>
        <h2>Best Choice</h2>
        <div className='best-menu'>
            <div className='best-menu-items'>
                {CatalogMenu.filter(item => item.price > 50).map((item, index) => (
                <CatalogCard item={item} key={index} />
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Faqs