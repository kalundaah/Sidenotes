import React from 'react'
import ReactDOM from "react-dom/client";
import Navigationpane from '../components/nav'
import Content from '../components/homepagecontent'
import { Outlet, Link } from "react-router-dom"

function Account() {
  return (
    <>
      <div>
        <h1>ACCOUNT MANAGEMENT</h1>
      </div>
      <Outlet/>
    </>
  )
}

export default Account