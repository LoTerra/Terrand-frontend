import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'

import './styles/base.scss'
import Navbar from './components/Navbar'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Navbar/>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>            
            <Routes path="*" />
          </Router>
        </React.Suspense> 
      </div>
    </Root>
  )
}

export default App