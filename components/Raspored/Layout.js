import React from 'react'
import Navbar from '../Navbar/navbar'
import Footer from '../footer/footer'
export default function Layout({children}) {
  return (
    <div className='w-full  '>
        <Navbar/>
         
        {children}
        <Footer/>
    </div>
  )
}
