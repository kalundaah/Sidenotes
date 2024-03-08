import React from 'react'
import Navigationpane from '../components/nav'
import { Outlet,Link } from 'react-router-dom';
function Nopage() {
  return (
    <div>
        <h1>ERROR</h1>
        <Outlet/>
    </div>
  )
}

export default Nopage