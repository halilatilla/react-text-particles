
import React, { FC, useState } from 'react';
import P5Wrapper from 'react-p5-wrapper'

import sketch from './sketch.js'

export interface TextParticlesProps {
  text?: string,
  textSize?: number,
  flow?: number,
  topSpeed?: number,
  lifeSpan?: number,
  flowOffset?: number,
  gravity?: {
    direction?: number,
    force?: number
  },
  canvas?: {
    width?: number,
    height?: number,
    bg?:string
  },
  colorSet?: string[]
};

export const TextParticles: FC<TextParticlesProps>=({
  text,
  textSize,
  flow,
  topSpeed,
  lifeSpan,
  flowOffset,
  gravity,
  canvas,
  colorSet
})=> {
  const [state] = useState({
    colorSet,
    config: {
      text,
      flow,
      topSpeed,
      lifeSpan,
      flowOffset,
      gravity,
      canvas,
      textSize
    },
    sketch
  })

  return (
    <P5Wrapper
      sketch={state.sketch}
      config={state.config}
      colorSet={state.colorSet}
    />
  )
}


TextParticles.defaultProps = {
  text: 'H.A',
  textSize: 160,
  flow: 0.3,
  topSpeed: 100,
  lifeSpan: 2000,
  flowOffset: 0,
  gravity: { direction: 90, force: 0 },
  canvas: { width: 300, height: 300, bg: 'white' },
  colorSet: [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4CAF50',
    '#8BC34A',
    '#CDDC39',
    '#FFEB3B',
    '#FFC107',
    '#FF9800',
    '#FF5722'
  ]
}
