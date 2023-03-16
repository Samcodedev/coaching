import React from 'react'
import Coach from './Coach/Coach'
import Header from './Header/Header'
import Service from './Service/Service'
import Testimony from './Testimony/Testimony'

const Home = () => {
  return (
    <>
      <Header />
      <Service />
      <Coach />
      <Testimony />
    </>
  )
}

export default Home
