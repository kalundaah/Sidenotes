import React from 'react'
import { Outlet,Link } from 'react-router-dom';
function Mynotes() {
  return (
    <div>
      <div className="contentarea">
        <h1>My notes</h1>
      </div>
      <Outlet/>  
    </div>
  )
}

export default Mynotes