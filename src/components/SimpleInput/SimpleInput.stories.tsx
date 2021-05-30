import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SimpleInput, SimpleInputProps } from './SimpleInput';

export default {
  title: 'Basic/SimpleInput',
  component: SimpleInput,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SimpleInputProps> = (args) => <SimpleInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
  label: 'Button Jammer',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'JAM SAM',
};
