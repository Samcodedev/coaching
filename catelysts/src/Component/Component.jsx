import React from 'react'
import {
    BrowserRouter as Router,
    Routes, 
    Route 
} from 'react-router-dom'
import Footer from '../ExComponent/Footer/Footer'
import About from './About/About'
import Home from './Home/Home'

const Component = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default Component
