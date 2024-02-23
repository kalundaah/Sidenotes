import React from 'react'
import Content from '../components/homepagecontent'
import { Outlet,Link } from 'react-router-dom'
function Labels() {
  return (
    <div>
      <h1>My labels</h1>
      <Outlet/>
    </div>
  )
}

export default Labels