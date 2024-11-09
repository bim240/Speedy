import React from 'react'
import {useGetUserFor12Month} from '../../../../services/dashboard/dashboard.data'
import ChartCard from '../../../../component/chart-card'
import Skeleton from '../../../../component/skeleton'
import SpeedyBarChart from '../../../../component/bar-chart'
import {downloadImage} from '../../../../utils/image'
import {EmptyState} from '../../../../component/empty-state/EmptyState'
import {ICONS} from '../../../../assets'

export default function UserGrowth() {
  const {data, isUserLoading, isUserError} = useGetUserFor12Month()

  if (isUserError) return <EmptyState title="No user Data" icon={ICONS.user} />

  const handleDownImage = () => {
    downloadImage(USER_GROWTH, 'total-asset-spends')
  }

  return (
    <div id={USER_GROWTH}>
      <ChartCard title={'User Growth'} handleDownImage={handleDownImage}>
        {isUserLoading ? (
          <Skeleton style={{height: '360px', width: '100%'}} />
        ) : (
          <SpeedyBarChart
            data={data || []}
            dataKey="value"
            xAxisKey="name"
            xAxisLabel="Month"
            yAxisLabel="New Users"
            height={300}
            tooltipConfig={{label: 'new users'}}
          />
        )}
      </ChartCard>
    </div>
  )
}

const USER_GROWTH = 'speedy-user-growth'
