import React from 'react'

import './CatalogCard.css'

const CatalogCard = ({ item }) => {
  return (
    <div className='item-container'>
      <div className="item-image" width={200}>
        <img src={item.image} alt="item-img" />
      </div>
      <div className="item-desc">
        <p>{item.name}</p>
        <h4>${item.price}</h4>
      </div>
    </div>
  )
}

export default CatalogCard