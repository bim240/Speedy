import React from 'react'
import classes from './styles.module.css'
import KeyMetric from './components/key-metric/KeyMetric'
import Skeleton from '../../component/skeleton'
// import UserGrowth from
// import RevenueDistribution from './components/revenue-distribution'
// import TopSongs from './components/top-songs'
// import SongTable from './components/song-table/SongTable'

const UserGrowth = React.lazy(
  () => import(/*webpackChunkName: "user-growth" */ './components/user-growth'),
)
const RevenueDistribution = React.lazy(
  () => import(/*webpackChunkName: "revenue-distribution" */ './components/revenue-distribution'),
)
const TopSongs = React.lazy(
  () => import(/*webpackChunkName: "top-songs" */ './components/top-songs'),
)
const SongTable = React.lazy(
  () => import(/*webpackChunkName: "song-table" */ './components/song-table/SongTable'),
)
export default function Dashboard() {
  return (
    <>
      <div className={classes.box}>
        <KeyMetric />
      </div>
      <div className={classes.box2}>
        <div className={classes.box3}>
          <React.Suspense fallback={<Skeleton />}>
            <UserGrowth />
          </React.Suspense>
          <React.Suspense fallback={<Skeleton />}>
            <RevenueDistribution />
          </React.Suspense>
        </div>
        <React.Suspense fallback={<Skeleton />}>
          <TopSongs />
        </React.Suspense>
      </div>
      <div className={classes.tableBox}>
        <React.Suspense fallback={<Skeleton />}>
          <SongTable />
        </React.Suspense>
      </div>
    </>
  )
}
