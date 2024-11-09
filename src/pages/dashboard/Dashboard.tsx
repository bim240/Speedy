import React from 'react'
import classes from './styles.module.css'
import KeyMetric from './components/key-metric/KeyMetric'

export default function Dashboard() {
  return (
    <>
      <div className={classes.box}>
        <KeyMetric />
      </div>
    </>
  )
}
