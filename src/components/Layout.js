import React from 'react'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className='layout'>
        <Navbar/>
        <div className='content'>
        {/* content for each page */}
        </div>
        <footer>
            <p>Cpoyright 2021 Web Warrior</p>
        </footer>
    </div>
  )
}
