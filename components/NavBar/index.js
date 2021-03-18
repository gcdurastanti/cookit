import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
  position: sticky;
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid #c7cccf;
  transition: border 1s ease-in-out;

  &:hover {
    border-bottom-color: #bdbdbd;
  }
`;

const routes = ['Home', 'About', 'Manage'];

const NavBar = () => {
  return <NavBarContainer />;
};

export default NavBar;
