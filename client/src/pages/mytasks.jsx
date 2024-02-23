import React from 'react'
import { Outlet,Link } from 'react-router-dom';
function Mytasks() {
  return (
    <div>
      <h1>My Tasks</h1>
      <Outlet/>
    </div>
  )
}

export default Mytasks