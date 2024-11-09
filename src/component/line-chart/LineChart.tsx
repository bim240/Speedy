import React from 'react'
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  LineChart,
  Line,
  Text,
  Tooltip,
} from 'recharts'
import {CustomTooltip} from '../bar-chart/BarChart'
import {EmptyState} from '../empty-state/EmptyState'
import {ICONS} from '../../assets'

interface LineChartProps {
  data: {
    name: string
    value: number
  }[]
  xAxisKey: string
  dataKey: string
  xAxisLabel: string
  yAxisLabel: string
  showDollar?: boolean
  height: number
  tooltipConfig?: {
    label?: string
  }
}

export default function SpeedyLineChart({
  data,
  xAxisKey = 'name',
  dataKey = 'value',
  yAxisLabel,
  showDollar,
  height,
  tooltipConfig,
}: LineChartProps) {
  return (
    <div style={{width: '100%'}}>
      {data?.length > 0 ? (
        <ResponsiveContainer width="100%" height={height}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="0" stroke="var(--neutral-arch-100)" vertical={false} />

            <XAxis dataKey={xAxisKey} tickLine={false} stroke="var(--text-primary)" />
            <YAxis
              axisLine={false}
              tickLine={false}
              dataKey={dataKey}
              stroke="var(--text-primary)"
              tickFormatter={value => (showDollar ? `$${value}` : value)}
              label={
                <Text
                  x={0}
                  y={0}
                  dx={14}
                  dy={Math.floor(height / 2)}
                  offset={0}
                  angle={-90}
                  fill="var(--text-primary)"
                  color="var(--text-primary)"
                  textAnchor="middle"
                  verticalAnchor="middle"
                >
                  {yAxisLabel}
                </Text>
              }
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
              itemStyle={{color: 'white'}}
              cursor={false}
            />
            <Line dataKey={dataKey} fill="var(--butterfly-blue)" type="monotone" />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <div>
          <EmptyState title="No data to show" icon={ICONS.user} />
        </div>
      )}
    </div>
  )
}
