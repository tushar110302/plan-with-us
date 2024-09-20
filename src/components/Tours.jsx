import React from 'react'
import Item from './Item'
function Tours({tours, removeTour}) {
  return (
    <div className='cards'>
        {tours.map((tour) => (
            <div key={tour.id}>
                <Item tour={tour} removeTour={removeTour} />
            </div>
        ))}
    </div>
  )
}

export default Tours