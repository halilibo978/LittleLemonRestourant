import React from 'react'
import { BookingForm } from '../components'

function Booking() {
  return (
    <>
    <section className='hero-section'>
      <div className='grid two-col-grid'>
          <div>
            <h1>Make a reservation</h1>
            <p>Make a reservation now and get a discout for your next time at Little Lemon.</p>
          </div>
          <img  className='hero-section-image' width={1024} src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
      </div>
    </section>
    <section>
      <div className='flex flex-col'>
        <BookingForm/>
      </div>
    </section>
  </>
  )
}

export default Booking