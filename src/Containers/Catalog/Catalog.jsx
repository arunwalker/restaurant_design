import React from 'react'

import CatalogCard from '../../Components/CatalogCard/CatalogCard'
import { CatalogMenu } from '../../utils'
import './Catalog.css'

const Catalog = () => {
  return (
    <div id="catalog" className='catalog-wrapper'>
      <div className='catalog-container'>
          <h2>Catalog</h2>
        <div className='catalog-content'>
          { CatalogMenu?.map((item, index) => (
            <CatalogCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Catalog