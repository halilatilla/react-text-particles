import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextParticles } from '../src';
import { TextParticlesProps } from '../src/types';

const meta: Meta = {
  title: 'TextParticles',
  component: TextParticles,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TextParticlesProps> = args => <TextParticles {...args} />;

export const Default = Template.bind({});

Default.args = {};
