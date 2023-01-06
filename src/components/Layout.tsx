import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
function Layout({children} : { children : ReactNode}) {
  return (
    <div>
      <Navbar/>
        {children}
      <Footer/>
    </div>
  )
}

export default Layout