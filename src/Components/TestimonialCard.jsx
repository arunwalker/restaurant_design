import React from 'react'

const TestimonialCard = ({item}) => {
  return (
    <div className="card-wrapper">
        <div className="card-image">
            <img src={item.img} alt='card-img' />
        </div>
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <span>{item.date}</span>
    </div>
  )
}

export default TestimonialCard