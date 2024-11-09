import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import classes from './styes.module.css'

function App() {
  return (
    <div className={classes.container}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
