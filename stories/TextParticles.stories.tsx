import React from 'react';
import { Meta, Story } from '@storybook/react';
import TextParticles, { TextParticlesProps } from '../src';

const meta: Meta = {
  title: 'TextParticles',
  component: TextParticles,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TextParticlesProps> = args => <TextParticles {...args} />;

export const Default = Template.bind({});

Default.args = {};
