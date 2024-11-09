import * as React from 'react'
import classes from './bar-chart.module.css'
import {
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Text,
  Bar,
  BarChart,
} from 'recharts'
import {EmptyState} from '../empty-state/EmptyState'
import {ICONS} from '../../assets'

interface SpeedyBarChartProps {
  xAxisLabel: string
  yAxisLabel: string
  height: number
  data: any[]
  dataKey: string
  xAxisKey: string
  fill?: string
  minTickCount?: number
  tooltipConfig?: {
    label?: string
  }
  emptyConfig?: {
    label: string
  }
}

export default function SpeedyBarChart({
  data,
  dataKey,
  xAxisKey,
  xAxisLabel,
  yAxisLabel,
  height,
  fill = 'var(--butterfly-blue)',
  minTickCount = 5,
  tooltipConfig,
  emptyConfig,
}: SpeedyBarChartProps) {
  // let [barGraphData, setBarGraphData] = React.useState<any>({})
  return (
    <div style={{width: '100%'}}>
      {data?.length > 0 ? (
        <ResponsiveContainer width="100%" height={height}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: 20,
              bottom: 5,
            }}
            barSize={40}
          >
            <CartesianGrid vertical={false} strokeDasharray="0" stroke="var(--neutral-arch-100)" />
            <XAxis
              dataKey={xAxisKey}
              tickLine={false}
              tickFormatter={value => (value ? value : 'N/A')}
              stroke="var(--text-primary)"
              style={{
                color: 'var(--text-primary)',
                fontWeight: 400,
                fontSize: '0.92308rem',
              }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              dataKey={dataKey}
              stroke="var(--text-primary)"
              tickCount={minTickCount >= 5 ? 5 : minTickCount}
              // tickFormatter={value =>
              //   showDollar
              //     ? currencyFormatter({
              //         locale: 'en',
              //         amount: value,
              //         currencyDisplay: 'symbol',
              //         notation: 'compact',
              //       })
              //     : value
              // }
              label={
                <Text
                  x={0}
                  y={0}
                  dx={14}
                  dy={Math.floor(height / 2)}
                  offset={0}
                  angle={-90}
                  fill="var(--text-hint)"
                  color="var(--text-hint)"
                  textAnchor="middle"
                  verticalAnchor="middle"
                  style={{
                    color: 'var(--text-primary)',
                    fontWeight: 400,
                    fontSize: '0.92308rem',
                  }}
                >
                  {yAxisLabel}
                </Text>
              }
            />

            <Bar
              dataKey={dataKey}
              name={xAxisLabel}
              fill={fill}
              // onMouseOver={data => {
              //   setBarGraphData(data)
              // }}
            />
            <Tooltip
              content={({active, payload, label}) => (
                <CustomTooltip
                  active={active}
                  payload={payload}
                  label={label}
                  tooltipConfig={tooltipConfig}
                />
              )}
              label={tooltipConfig?.label}
              cursor={{fill: 'transparent'}}
              // position={{x: barGraphData.x - 30, y: barGraphData.y - 40}}
            />
          </BarChart>
        </ResponsiveContainer>
      ) : emptyConfig ? (
        <EmptyState
          icon={ICONS.user}
          title={emptyConfig.label}
          desc="Nothing to show here"
          customSvgClassName={classes.emptyIcon}
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export const CustomTooltip = ({
  active,
  payload,
  label,
  tooltipConfig,
}: {
  active: any
  payload: any
  label: string
  tooltipConfig?: any
}) => {
  if (active && payload && payload.length) {
    return (
      <div className={classes.customTooltip}>
        <p className={classes.tooltipLabel}>{`${label} : ${
          payload[0].value
        } ${tooltipConfig?.label ?? ''}`}</p>
      </div>
    )
  }

  return null
}
