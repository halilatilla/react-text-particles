import React, { FC, useMemo } from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';

import { ParticleState } from './types';
import useParticleConfig from './hooks/useParticleConfig';

export const TextParticles: FC<ParticleState> = (props) => {
  const state = useMemo(() => useParticleConfig(props), [props]);

  return (
    <ReactP5Wrapper
      sketch={state.sketch}
      config={state.config}
      colorSet={state.colorSet}
    />
  );
};

export default React.memo(TextParticles);
