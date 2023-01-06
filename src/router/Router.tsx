import { Home, Booking } from '../pages'
import { Route, Routes } from 'react-router-dom'
import ConfirmedBooking from '../pages/ConfirmedBooking '

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Booking" element={<Booking />}></Route>
      <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route>
    </Routes>
  )
}

export default Router
