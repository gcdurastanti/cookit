import React from 'react';

import NavBar from './';

export default {
  title: 'Components/NavBar',
  component: NavBar,
};

const Template = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
