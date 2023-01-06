import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <img src="./little-lemon-logo.png" width={200} alt="Little Lemon Logo" />
      <ul>
      <li>
            <Link to={`/`}>
                <a >Home</a>
            </Link>  
          </li>        
          <li>
            <Link to={`/booking`}>
              <a>Reserve a table</a>
            </Link> 
          </li>
      </ul>
    </nav>
  )
}

export default Navbar