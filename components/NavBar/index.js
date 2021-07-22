import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import NavLink from './NavLink';
import Logo from '../Logo';

const NavBarContainer = styled.div`
  display: flex;
  position: sticky;
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid #c7cccf;
  transition: border 150ms ease;
  align-items: center;
  font-family: Signika, Arial, Helvetica, sans-serif

  &:hover {
    border-bottom-color: #a4a9ab;
  }

  a {
    color: black;
  }
`;

const Divider = styled.div`
  height: 70%;
  width: 1px;
  border: 1px solid #c7cccf;
  margin: 0 1rem;
`;

const routes = [
  { route: '/', display: 'Home' },
  { route: '/manage', display: 'Manage' },
  { route: 'about', display: 'About' },
];

const NavBar = () => {
  return (
    <NavBarContainer>
      <Logo />
      <Divider />
      {routes.map(({ route, display }) => (
        <NavLink href={route}>{display}</NavLink>
      ))}
    </NavBarContainer>
  );
};

export default NavBar;
