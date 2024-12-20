import React from 'react'
import classes from './styles.module.css'
import SpeedySVG from '../svg'

interface TagProps {
  text: string
  status: STATUS_MAP
  icon?: string
  customStyles?: React.CSSProperties
}

export enum STATUS_MAP {
  SUCCESS = 'success',
  INFO = 'info',
  ERROR = 'error',
  WARNING = 'warning',
  DEFAULT = 'default',
}

const statusMap = {
  [STATUS_MAP.SUCCESS]: {
    name: 'Assigned',
    bgColor: 'var(--status-success-10)',
    color: 'var(--status-success-s70)',
  },
  [STATUS_MAP.WARNING]: {
    name: 'Unassigned',
    bgColor: 'var(--status-warning-10)',
    color: 'var(--status-warning)',
  },
  [STATUS_MAP.INFO]: {
    name: 'In-Transition',
    bgColor: 'var(--status-info-10)',
    color: 'var(--status-info)',
  },
  [STATUS_MAP.DEFAULT]: {
    name: 'Archived',
    bgColor: 'var(--dark-d10)',
    color: 'var(--dark-d70)',
  },
  [STATUS_MAP.ERROR]: {
    name: 'Under maintenance',
    bgColor: 'var(--status-error-10)',
    color: 'var(--status-error-e70)',
  },
}

export function Tag({status, text, icon, customStyles = {}}: TagProps) {
  return (
    <div
      className={classes.status}
      style={{
        backgroundColor: statusMap[status].bgColor,
        color: statusMap[status].color,
        ...customStyles,
      }}
    >
      {icon && (
        <SpeedySVG
          path={icon}
          customSvgStyles={{fill: statusMap[status].color, width: '20px', height: '20px'}}
          customSpanStyles={{marginLeft: '-2px'}}
        />
      )}
      {text}
    </div>
  )
}
