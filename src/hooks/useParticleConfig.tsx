import { useState } from 'react';
import sketch from '../sketch/index';
import { ParticleState } from '../types';

export default function useParticleConfig({
  text = 'Halil Atilla',
  textSize = 160,
  flow = 0.3,
  topSpeed = 100,
  lifeSpan = 2000,
  flowOffset = 0,
  gravity = { direction: 90, force: 0 },
  canvas = { width: 880, height: 300, bg: '#161c1e' },
  colorSet = ['#fbbf24', '#e91e63', '#60a5fa', '#673ab7', '#65a30d'],
}): ParticleState {
  const [state] = useState<ParticleState>({
    colorSet,
    config: {
      text,
      textSize,
      flow,
      topSpeed,
      lifeSpan,
      flowOffset,
      gravity,
      canvas,
    },
    sketch,
  });

  return state;
}
