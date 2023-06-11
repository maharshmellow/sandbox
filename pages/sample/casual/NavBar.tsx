import Head from 'next/head';
import styled from 'styled-components';
import { Azeret_Mono } from 'next/font/google';
import Link from 'next/link';

// swap allows it to load during development as well
const azeretMono = Azeret_Mono({ subsets: ['latin'], display: 'swap' });

const Container = styled.div`
  display: flex;
  max-width: 1300px;
  margin: auto;

  @media (max-width: 900px) {
    display: none;
  }
`;
const Left = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1 1 0px;
  width: 0;

  > div {
  }
  > div > a {
    margin-right: 20px;
  }
`;
const Center = styled.div`
  display: flex;
  flex: 1 1 0px;
  width: 0;
  justify-content: center;
  background-color: black;
  color: white;
`;
const Right = styled.div`
  display: flex;
  flex: 1 1 0px;
  width: 0;
  margin-left: auto;
  justify-content: flex-end;

  > div > a {
    margin-left: 20px;
  }
`;

export default function NavBar() {
  return (
    <Container className={azeretMono.className}>
      <Left>
        <div>
          <Link href="/sample/casual">HOME</Link>
          <Link href="/sample/casual/menu">MENU</Link>
          <Link href="/sample/casual/about">ABOUT</Link>
        </div>
      </Left>
      <Center>LOGO</Center>
      <Right>
        <div>
          <Link href="/sample/casual">CONTACT</Link>
        </div>
      </Right>
    </Container>
  );
}
