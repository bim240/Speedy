import * as React from 'react'
import PieChartPopover from './PieChartPopover'
import classes from './pie-chart.module.css'
import {ResponsiveContainer, PieChart, Pie, Cell, Sector, Tooltip} from 'recharts'
import {EmptyState} from '../empty-state/EmptyState'
import {ICONS} from '../../assets'
import {COLORS} from '../../utils/colors'

interface PieChartProps {
  data: Record<string, string | number>[]
  chartConfig: {
    nameKey: string
    dataKey: string
  }
}

export default function SpeedyPieChart({data, chartConfig}: PieChartProps) {
  const [activeIndex, setActiveIndex] = React.useState<number>(-1)

  const chartTotal = data?.reduce((acc, curr) => {
    return (acc += +curr[chartConfig?.dataKey])
  }, 0)

  // needs to be sorted to match colors, api sorting isn't guaranteed
  const chart = data.sort((a, b) => +b[chartConfig?.dataKey] - +a[chartConfig?.dataKey])

  const onMouseOver = React.useCallback((item: any, index: React.SetStateAction<number>) => {
    setActiveIndex(index)
  }, [])

  const onMouseLeave = React.useCallback(() => {
    setActiveIndex(-1)
  }, [])

  const CustomTooltip = (props: any) => {
    if (props.active) {
      const label = props.payload?.[0]?.name
      const value = props.payload?.[0]?.value
      const percentage = ((value / chartTotal) * 100).toFixed(2)
      return (
        <div className={classes.tooltip}>
          <div style={{fontWeight: '600'}}>{`${label}: ${value + ' (' + percentage + '%)'}`}</div>
        </div>
      )
    }
    return null
  }

  return (
    <div>
      {!chart?.length ? (
        <EmptyState title="No data yet" desc="Add more data to get insights" icon={ICONS.user} />
      ) : (
        <div className={classes.box}>
          <div className={classes.chart}>
            <ResponsiveContainer width="100%" height="100%" debounce={300}>
              <PieChart width={500} height={500}>
                <Pie
                  data={chart}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  fill="#8884d8"
                  nameKey={chartConfig.nameKey}
                  dataKey={chartConfig.dataKey}
                  labelLine={<></>}
                  activeIndex={activeIndex}
                  onMouseOver={onMouseOver}
                  onMouseLeave={onMouseLeave}
                >
                  {chart?.map((_, index) => {
                    return <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  })}
                </Pie>
                <Tooltip itemStyle={{color: 'white'}} content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div>
            <div className={classes.info}>
              {chart.slice(0, 4).map((data, index) => (
                <div className={classes.singleInfo} key={data[chartConfig?.nameKey]}>
                  <div className={classes.colorBox} style={{background: COLORS[index]}}></div>
                  <div className={classes.text}>{`${data[chartConfig?.nameKey]} - ${
                    data[chartConfig?.dataKey]
                  }`}</div>
                </div>
              ))}
            </div>
            <PieChartPopover chart={chart} chartConfig={chartConfig} />
          </div>
        </div>
      )}
    </div>
  )
}
