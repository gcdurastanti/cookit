import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const NavLinkContainer = styled.div`
  color: #373a3c;
  padding: 1rem 1rem;
`;

const routes = ['Home', 'About', 'Manage'];

const NavLink = (props) => {
  return <NavLinkContainer>{<Link {...props}></Link>}</NavLinkContainer>;
};

export default NavLink;
