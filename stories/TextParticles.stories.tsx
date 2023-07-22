import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextParticles } from '../src';
import { ParticleState } from '../src/types';

const meta: Meta = {
  title: 'TextParticles',
  component: TextParticles,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ParticleState> = (args) => <TextParticles {...args} />;

export const Default = Template.bind({});

Default.args = {};
