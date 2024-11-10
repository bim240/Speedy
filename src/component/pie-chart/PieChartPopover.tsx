import * as React from 'react'
import * as popover from '@zag-js/popover'
import clsx from 'clsx'
import classes from './pie-chart.module.css'
import {useMachine, normalizeProps, Portal} from '@zag-js/react'
import {COLORS} from '../../utils/colors'

interface PieChartPopoverProps {
  chart: Record<string, string | number>[]
  chartConfig: {
    nameKey: string
    dataKey: string
  }
}

export default function PieChartPopover({chart, chartConfig}: PieChartPopoverProps) {
  const [state, send] = useMachine(popover.machine({id: 'pie-chart-popover'}))

  const api = popover.connect(state, send, normalizeProps)

  const Wrapper = api.portalled ? Portal : React.Fragment

  return (
    <div className={classes.popoverBox}>
      {chart.length > 4 && (
        <>
          <button
            className={clsx(classes.triggerText, 'zap-reset-btn', api.open && classes.textActive)}
            {...api.getTriggerProps()}
          >
            {chart.length - 4}+ more
          </button>
          <Wrapper>
            <div {...api.getPositionerProps()}>
              <div {...api.getArrowProps()}>
                <div {...api.getArrowTipProps()} />
              </div>
              <div {...api.getContentProps()} className={classes.popoverContent}>
                <div {...api.getDescriptionProps()}>
                  <div className={classes.infos}>
                    {chart.slice(4).map((data, index) => (
                      <div className={classes.singleInfo2} key={data[chartConfig?.nameKey]}>
                        <div className={classes.colorBox} style={{background: COLORS[index + 4]}} />
                        <div
                          className={classes.text}
                          style={{color: 'var(--neutral-white)', fontWeight: 500}}
                        >{`${data[chartConfig?.nameKey]} - ${data[chartConfig?.dataKey]}`}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </>
      )}
    </div>
  )
}
