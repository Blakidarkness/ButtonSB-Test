import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '.';

export default {
  title: 'components/Forms/Button',
  component: Button,
} as Meta;

const handleOnClick = (message : string) => {
  console.log(`Clicked: ${message}`);
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tag: 'Click me!', tooltip: 'Im a Primary Button', handleOnClick,
};

export const Secondary = Template.bind({});
Secondary.args = {
  tag: 'Click me!', style: 'secondary', tooltip: 'Im a Secondary Button', handleOnClick,
};
