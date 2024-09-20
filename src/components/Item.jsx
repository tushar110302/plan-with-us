import React, { useState } from 'react'

function Item({tour,removeTour}) {
    const [readMore, setReadMore] = useState(false)
    const description = readMore ? tour.info : `${tour.info.substring(0,200)}...`
  return (
    <div className='card'>
        <img src={tour.image} className='image' />
        <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {tour.price}</h4>
                    <h4 className="tour-name">{tour.name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={() => setReadMore(prev => !prev)}>
                        {readMore ? `Show Less`: `Read \More`}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={() => removeTour(tour.id)}>
                Not Interested
            </button>
    </div>
  )
}

export default Item