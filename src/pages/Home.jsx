import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Explore from '../components/Explore'
import Feacture from '../components/Feacture'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <div className=''>
      <Navbar/>
    </div>

    <div className='m-auto w-full flex items-center justify-center bg-yellow-50 p-10'>
      <Banner/>
    </div>

    <div className='m-auto w-full flex items-center justify-center'>
      <AboutUs/>
    </div>

    <div className=' mt-10 mb-10 '>
      <Feacture/>
    </div>

    <div>
      <Footer/>
    </div>
    </>
  )
}

export default Home
