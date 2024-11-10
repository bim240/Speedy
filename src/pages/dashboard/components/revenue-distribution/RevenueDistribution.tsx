import React from 'react'
import {useGetRevenueDistribution} from '../../../../services/dashboard/dashboard.data'
import ChartCard from '../../../../component/chart-card'
import {EmptyState} from '../../../../component/empty-state/EmptyState'
import {ICONS} from '../../../../assets'
import Skeleton from '../../../../component/skeleton'
import SpeedyPieChart from '../../../../component/pie-chart'

export default function RevenueDistribution() {
  const {data, isLoading, isError} = useGetRevenueDistribution()

  return (
    <div>
      <ChartCard title="Revenue Distribution" background="var(--white)">
        {isError ? (
          <EmptyState icon={ICONS.user2} title="Something went wrong" />
        ) : isLoading ? (
          <Skeleton style={{width: '100%', height: '300px'}} />
        ) : data ? (
          <SpeedyPieChart data={data} chartConfig={{nameKey: 'name', dataKey: 'value'}} />
        ) : (
          <></>
        )}
      </ChartCard>
    </div>
  )
}
