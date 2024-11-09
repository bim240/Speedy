import React from 'react'
import classes from './styles.module.css'
import clsx from 'clsx'
import {ICONS} from '../../assets'
import SpeedySVG from '../svg'

export interface ChartCardHeadingProps {
  title: string
  handleDownImage?: () => void
  headingType?: 'primary' | 'secondary'
}

export default function ChartCardHeading({
  title,
  handleDownImage,
  headingType = 'primary',
}: ChartCardHeadingProps) {
  return (
    <div className={classes.box}>
      <div className={clsx(classes.heading, classes[headingType])}>{title}</div>

      <div className={classes.actions}>
        {handleDownImage && (
          <div onClick={handleDownImage}>
            <SpeedySVG path={ICONS.arrowCollapseDown} svgClassName={classes.downloadIcon} />
          </div>
        )}
      </div>
    </div>
  )
}
