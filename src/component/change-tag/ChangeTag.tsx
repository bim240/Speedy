import * as React from 'react'
import classes from './styles.module.css'
import clsx from 'clsx'
import {STATUS_MAP, Tag} from '../tag/Tag'
import {ICONS} from '../../assets'

interface ChangeTagProps {
  changeType: string
  changeAmount: number
  changePeriod: string
  customStyle?: React.CSSProperties
}

export default function ChangeTag({
  changeType,
  changeAmount,
  changePeriod,
  customStyle,
}: ChangeTagProps) {
  const changeTxt = changeAmount === 0 ? `No change` : `${changeAmount}% ${changePeriod}`

  const getIcon = () => {
    return changeType === 'increase'
      ? ICONS.trendUp
      : changeType === 'decrease'
        ? ICONS.trendDown
        : ICONS.minus
  }
  return (
    <div
      className={clsx(
        classes.changeBox,
        changeType === 'increase'
          ? classes.changeBoxInc
          : changeType === 'decrease'
            ? classes.changeBoxDesc
            : classes.changeBoxNo,
      )}
      style={customStyle}
    >
      <Tag
        status={
          changeType === 'increase'
            ? STATUS_MAP.SUCCESS
            : changeType === 'decrease'
              ? STATUS_MAP.ERROR
              : STATUS_MAP.DEFAULT
        }
        text={changeTxt}
        icon={getIcon()}
      />
    </div>
  )
}
