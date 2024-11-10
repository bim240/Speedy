import React from 'react'
import classes from './styles.module.css'
import {
  useGetActiveUser,
  useGetStreamUser,
  useGetTotalRevenue,
  useGetTotalUser,
} from '../../../../../services/dashboard/dashboard.data'
import {EmptyState} from '../../../../../component/empty-state/EmptyState'
import clsx from 'clsx'
import Skeleton from '../../../../../component/skeleton'
import ChangeTag from '../../../../../component/change-tag'
import {ICONS} from '../../../../../assets'
import SpeedySVG from '../../../../../component/svg'
export default function Stats() {
  const {totalUser, isTotalUserLoading, isTotalUserError} = useGetTotalUser()
  const {activeUser, isActiveUserLoading, isActiveUserError} = useGetActiveUser()
  const {steamUser, isSteamUserLoading, isSteamUserError} = useGetStreamUser()
  const {revenue, isRevenueLoading, isRevenueError} = useGetTotalRevenue()

  const stats = [
    {
      label: 'Total User',
      data: totalUser,
      isLoading: isTotalUserLoading,
      isError: isTotalUserError,
      dataKey: 'total',
      accentColor: 'var(--butterfly-blue)',
      icon: ICONS.user,
      emptyLabel: 'No User',
    },
    {
      label: 'Active User',
      data: activeUser,
      isLoading: isActiveUserLoading,
      isError: isActiveUserError,
      dataKey: 'total',
      accentColor: 'var(--sea-green)',
      icon: ICONS.user2,
      emptyLabel: 'No Active User',
    },
    {
      label: 'Stream User',
      data: steamUser,
      isLoading: isSteamUserLoading,
      isError: isSteamUserError,
      dataKey: 'Total',
      accentColor: 'var(--sky-blue)',
      icon: ICONS.user3,
      emptyLabel: 'No Streaming user',
    },
    {
      label: 'Revenue',
      data: revenue,
      isLoading: isRevenueLoading,
      isError: isRevenueError,
      dataKey: 'total',

      accentColor: 'var(--slate-blue)',
      icon: ICONS.users,
      emptyLabel: 'No Revenue',
    },
  ]
  return (
    <div className={classes.box}>
      {stats.map((stat, idx) => {
        if (!stat.data && !stat.isLoading && !stat.isError) {
          return (
            <div className={classes.emptyBox} key={`${stat.dataKey}${idx} empty`}>
              <EmptyState
                icon={stat.icon}
                title={stat.emptyLabel}
                desc="Nothing to show here"
                key={stat.dataKey}
              />
            </div>
          )
        }

        if (!stat.data) {
          return (
            <div className={classes.emptyBox} key={`${stat.dataKey}${idx}no-data`}>
              <EmptyState
                icon={stat.icon}
                title={stat.emptyLabel}
                desc="Nothing to show here"
                key={stat.dataKey}
              />
            </div>
          )
        }

        return (
          <div className={clsx(classes.stat)} key={`${stat.dataKey}${idx}with data`}>
            <div className={classes.statInner}>
              <div className={classes.statInner2}>
                <p className={classes.statVal}>
                  {stat.data ? (
                    stat.data.total
                  ) : (
                    <Skeleton style={{width: '30px', height: '26px'}} />
                  )}
                  {stat.data &&
                    (stat.data.decrease_percentage || stat.data.increase_percentage) && (
                      <span style={{fontSize: '1.07692rem'}}>
                        {stat.data.increase_percentage
                          ? `${stat.data.increase_percentage} increase`
                          : stat.data.decrease_percentage
                            ? `${stat.data.increase_percentage} decrease`
                            : '-No Change'}
                      </span>
                    )}
                </p>
                <p className={classes.statTxt}>{stat.label}</p>
              </div>

              {stat.data.decrease_percentage || stat.data.increase_percentage ? (
                <ChangeTag
                  changeAmount={stat.data.change}
                  changePeriod={'1 Month'}
                  changeType={
                    stat.data.increase_percentage
                      ? 'increase'
                      : stat.data.decrease_percentage
                        ? 'decrease'
                        : 'no-change'
                  }
                  customStyle={{justifyContent: 'flex-start'}}
                />
              ) : (
                <Skeleton style={{width: '160px', height: '16px'}} />
              )}
            </div>

            <div className={classes.accent} style={{backgroundColor: stat.accentColor}}>
              <SpeedySVG path={stat.icon} svgClassName={classes.accentIcon} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
