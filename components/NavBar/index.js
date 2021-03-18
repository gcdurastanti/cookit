import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const NavBarContainer = styled.div`
  display: flex;
  position: sticky;
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid #c7cccf;
  transition: border 150ms ease;
  align-items: center;

  &:hover {
    border-bottom-color: #a4a9ab;
  }
`;

const NavLink = styled.div`
  color: #373a3c;
  padding: 1rem 1rem;
`;

const routes = ['Home', 'About', 'Manage'];

const NavBar = () => {
  return (
    <NavBarContainer>
      {routes.map((route) => (
        <NavLink>{<Link href={`/${route.toLowerCase()}`}>{route}</Link>}</NavLink>
      ))}
    </NavBarContainer>
  );
};

export default NavBar;
