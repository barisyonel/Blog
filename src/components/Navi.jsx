import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navi = () => {
  return (
    <>
      <nav>
          <ul>
              <li><NavLink style={({isActive})=>({color: isActive?"orangered":"#ffe135"})} to="main">Main</NavLink></li>
              <li><NavLink to="blog">Blog</NavLink></li>
              <li><NavLink to="gallery">Gallery</NavLink></li>
              <li><NavLink to="contact">Contact</NavLink></li>
          </ul>
      </nav>
      <Outlet/>
    </>
  )
}

export default Navi