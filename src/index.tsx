import React, { FC, useState } from 'react';
import { ReactP5Wrapper } from "react-p5-wrapper";

import sketch from './sketch/index.js';

export interface TextParticlesProps {
  text: string;
  flow?: number;
  topSpeed?: number;
  lifeSpan?: number;
  flowOffset?: number;
  gravity?: {
    direction?: number;
    force?: number;
  };
  canvas?: {
    width?: number;
    height?: number;
    bg?: string;
  };
  colorSet?: string[];
}

export const TextParticles: FC<TextParticlesProps> = 
  ({
    text = 'Halil Atilla',
    flow = 0.3,
    topSpeed = 100,
    lifeSpan = 2000,
    flowOffset = 0,
    gravity = { direction: 90, force: 0 },
    canvas = { width: 1800, height: 600, bg: '#161c1e' },
    colorSet = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5'],
  }) => {
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
      },
      sketch,
    });

    return (
      <ReactP5Wrapper
        sketch={state.sketch}
        config={state.config}
        colorSet={state.colorSet}
      />
    );
  }
