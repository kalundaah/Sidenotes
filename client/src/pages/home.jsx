import React from 'react'
import Navigationpane from '../components/nav'
import Content from '../components/homepagecontent'
import { Outlet,Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Content/>
      <Outlet/>
    </div>
  )
}

export default Home