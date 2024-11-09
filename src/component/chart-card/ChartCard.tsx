import * as React from 'react'
import clsx from 'clsx'
import ChartCardHeading from '../chart-card-heading'
import classes from './styles.module.css'
import type {ChartCardHeadingProps} from '../chart-card-heading'

interface ChartCardProps extends ChartCardHeadingProps {
  children: React.ReactNode
  background?: string
  showBorder?: boolean
}

export default function ChartCard({
  children,
  background,
  showBorder = false,
  ...props
}: ChartCardProps) {
  return (
    <div
      className={clsx(classes.box, {[classes.border]: showBorder})}
      style={{background: background}}
    >
      <ChartCardHeading {...props} />
      {children}
    </div>
  )
}
