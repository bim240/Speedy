import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import classes from './styes.module.css'
import NavWrapper from './component/nav-wrapper/NavWrapper'

function App() {
  return (
    <NavWrapper>
      <div className={classes.container}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<>home</>} />
          <Route path="/people" element={<>people</>} />
          <Route path="/users" element={<> users </>} />
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<>page not found component to be displayed</>} />
        </Routes>
      </div>
    </NavWrapper>
  )
}

export default App
