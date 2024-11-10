import React from 'react'
import classes from './styles.module.css'
import {useGetTopArtist} from '../../../../../services/dashboard/dashboard.data'
import Skeleton from '../../../../../component/skeleton'
import {EmptyState} from '../../../../../component/empty-state/EmptyState'
import {ICONS} from '../../../../../assets'
export default function TopArtist() {
  const {topArtistInfo, isTopArtistLoading, isTopArtistError} = useGetTopArtist()
  return isTopArtistLoading ? (
    <Skeleton className={classes.box} />
  ) : (
    <div className={classes.box}>
      <p className={classes.title}>Top Artist</p>
      {isTopArtistError ? (
        <EmptyState icon={ICONS.user} title="Something went wrong" />
      ) : !topArtistInfo ? (
        <EmptyState icon={ICONS.user} title="No top artist" />
      ) : topArtistInfo ? (
        <div className={classes.artistContainer}>
          <img
            className={classes.artistImage}
            alt={topArtistInfo.name}
            src={topArtistInfo.img}
            loading="eager"
          />
          <p className={classes.artistName}>{topArtistInfo.name}</p>
          <p className={classes.artistCountry}> {topArtistInfo.country}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
