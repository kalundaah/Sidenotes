import React from 'react'
import { Outlet,link } from 'react-router-dom';
function Mytasks() {
  return (
    <div>
      <h1>My Tasks</h1>
      <Outlet/>
    </div>
  )
}

export default Mytasks