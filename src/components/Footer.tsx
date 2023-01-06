import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>

        <ul className='flex'>
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

      <div>
         © 2023 Little lemon Inc. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer