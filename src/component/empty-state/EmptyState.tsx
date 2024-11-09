import * as React from 'react'
import clsx from 'clsx'
import classes from './styles.module.css'
import SpeedySVG from '../svg'

interface EmptyStateProps {
  icon: string
  title: string
  desc?: string
  flexDir?: 'row' | 'column'

  customSvgStyles?: React.CSSProperties
  customSvgClassName?: string
}

/**
 * adapts to parent's width and height
 */
export function EmptyState({
  icon,
  title,
  desc,
  flexDir = 'column',
  customSvgClassName,
}: EmptyStateProps) {
  return (
    <div className={clsx(classes.container, flexDir === 'row' && classes.containerRow)}>
      <div className={classes.iconBox}>
        <SpeedySVG
          path={icon}
          svgClassName={clsx(classes.icon, customSvgClassName ? customSvgClassName : undefined)}
        />
      </div>
      <div className={classes.info}>
        <h6 className={clsx(classes.title, flexDir === 'row' && classes.textRow)}>{title}</h6>
        {desc && <p className={clsx(classes.desc, flexDir === 'row' && classes.textRow)}>{desc}</p>}
      </div>
    </div>
  )
}
