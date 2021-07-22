import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const LogoContainer = styled.div`
  font-family: Helvetica, sans-serif;
  margin-left: 1rem;
`;

const LogoImage = styled(Image)`
  height: 3rem;
`;

const Logo = () => (
  <LogoContainer>
    <Link href="/home">
      <Image
        src="/PD_RedCar-BlackName.png" // Route of the image file
        alt="Perfection Detailing"
        width="100px"
        height="45px"
      ></Image>
    </Link>
  </LogoContainer>
);

export default Logo;
