import React from 'react'
import {ReactSVG} from 'react-svg'
export type SVGProps = {
  path: string
  width?: number
  height?: number
  spanClassName?: string
  svgClassName?: string
  customSvgStyles?: React.CSSProperties
  customSpanStyles?: React.CSSProperties
}

export default function SpeedySVG({
  path,
  width,
  height,
  spanClassName = '',
  svgClassName = '',
  customSpanStyles = {},
  customSvgStyles = {},
}: SVGProps) {
  return (
    <span className={`${spanClassName}`} style={{...customSpanStyles}}>
      <ReactSVG
        src={path}
        className={svgClassName}
        style={{...customSvgStyles}}
        // loader={<span>Loading...</span>}
        onError={error => console.log(error)}
        width={width}
        height={height}
      />
    </span>
  )
}
