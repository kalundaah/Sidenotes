import React from 'react'
import { Outlet, Link } from "react-router-dom"
import "../index.css"
import "../App.css"

function Navigationpane() {

  return (
    <div>
      <div>
        <nav>
          <div className="leftnavside">
            <Link to="/"><img className='logo' src="./logonavigation.svg" alt="" /></Link>
          </div>
          <div className="rightnavside">
            <Link to="/my-notes">My Notes</Link>
            <Link to="/my-tasks">My tasks</Link>
            <Link to="/my-labels">Labels</Link>
            <Link to="/Account">Account</Link>
          </div>
        </nav>
      </div>
    <Outlet />
    </div>
  )
}

export default Navigationpane