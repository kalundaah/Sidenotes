import React from 'react'
import { useState } from 'react'
import Navigationpane from './components/nav'
import Content from './components/content'
import './App.css'

function App() {
  return(
    <div>
      <Navigationpane/>
      <Content/>
    </div>
  )
 
}

export default App
