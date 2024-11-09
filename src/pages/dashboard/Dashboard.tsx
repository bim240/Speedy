import React from 'react'
import classes from './styles.module.css'
import KeyMetric from './components/key-metric/KeyMetric'
import UserGrowth from './components/user-growth'

export default function Dashboard() {
  return (
    <>
      <div className={classes.box}>
        <KeyMetric />
      </div>
      <div className={classes.box2}>
        <UserGrowth />
      </div>
    </>
  )
}
