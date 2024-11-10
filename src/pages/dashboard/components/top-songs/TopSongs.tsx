import React from 'react'
import classes from './styles.module.css'
import {useGetTopTenSongs} from '../../../../services/dashboard/dashboard.data'
import {EmptyState} from '../../../../component/empty-state/EmptyState'
import {ICONS} from '../../../../assets'
import Skeleton from '../../../../component/skeleton'

export default function TopSongs() {
  const {data, isError, isLoading} = useGetTopTenSongs()
  return isError ? (
    <EmptyState icon={ICONS.user} title="Something went wrong" />
  ) : isLoading ? (
    <Skeleton className={classes.container} />
  ) : data ? (
    <div className={classes.container}>
      <p className={classes.title}> Top 5 songs</p>
      <div className={classes.songContainer}>
        {data.map(song => (
          <div key={song.id} className={classes.singleSongContainer}>
            <div className={classes.artistSection}>
              <img src={song.artist.img} alt={song.artist.name} className={classes.artistImg} />
              <div className={classes.artistDetails}>
                <p className={classes.artistName}>{song.artist.name}</p>
                <p
                  className={classes.artistOtherInfo}
                >{` ${song.artist.country} | ${song.language}`}</p>
              </div>
            </div>
            <audio className={classes.audioPlayer} controls id={song.id}>
              <source src={song.url} type="audio/mp3"></source>
            </audio>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <EmptyState icon={ICONS.user} title="No song available" />
  )
}
