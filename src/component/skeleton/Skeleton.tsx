import React from 'react'
import clsx from 'clsx'
import classes from './styles.module.css'

export default function Skeleton({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
  return <span className={clsx(classes.container, 'w-30 h-30', className)} {...props} />
}
