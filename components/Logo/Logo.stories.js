import React from 'react';

import Logo from './';

export default {
  title: 'Components/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
