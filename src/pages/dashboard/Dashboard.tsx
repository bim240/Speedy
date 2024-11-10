import React from 'react'
import classes from './styles.module.css'
import KeyMetric from './components/key-metric/KeyMetric'
import UserGrowth from './components/user-growth'
import RevenueDistribution from './components/revenue-distribution'
import TopSongs from './components/top-songs'

export default function Dashboard() {
  return (
    <>
      <div className={classes.box}>
        <KeyMetric />
      </div>
      <div className={classes.box2}>
        <div className={classes.box3}>
          <UserGrowth />
          <RevenueDistribution />
        </div>
        <TopSongs />
      </div>
    </>
  )
}
