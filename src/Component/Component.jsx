import React from 'react'
import {
    BrowserRouter as Router,
    Routes, 
    Route 
} from 'react-router-dom'
import Footer from '../ExComponent/Footer/Footer'
import Navbar from '../ExComponent/Navbar/Navbar'
import About from './About/About'
import Home from './Home/Home'
import Instructure from './Instructure/Instructure'
import Service from './Service/Service'

const Component = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/instructor" element={<Instructure />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default Component
