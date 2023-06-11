/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Azeret_Mono } from 'next/font/google';
import Link from 'next/link';

// swap allows it to load during development as well
const azeretMono = Azeret_Mono({ subsets: ['latin'], display: 'swap' });

const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  font-weight: 500;
  font-size: 15px;
`;

const LargeNavBar = styled.div`
  display: flex;
  @media (max-width: 900px) {
    display: none;
  }
`;

const SmallNavBar = styled.div`
  display: flex;
  @media (min-width: 900px) {
    display: none;
  }
`;

const LargeNavBarLeft = styled.div`
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
const LargeNavBarCenter = styled.div`
  display: flex;
  flex: 1 1 0px;
  width: 0;
  justify-content: center;
  // background-color: black;
  color: white;
`;
const LargeNavBarRight = styled.div`
  display: flex;
  flex: 1 1 0px;
  width: 0;
  margin-left: auto;
  justify-content: flex-end;

  > div > a {
    margin-left: 20px;
  }
`;

const SmallNavBarLeft = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1 1 0px;
  width: 0;
  color: white;

  > .logo {
    width: 100px;
  }
`;

const SmallNavBarRight = styled.div`
  display: flex;
  flex: 1 1 0px;
  width: 0;
  margin-left: auto;
  justify-content: flex-end;

  > div > a {
    margin-left: 20px;
  }
`;

const Hamburger = styled.div`
  font-size: 30px;
  cursor: pointer;
`;

const Modal = styled.div<{ open: boolean }>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgb(255, 229, 0);
  color: white;
  top: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  transition: opacity 0.2s ease-out;
  opacity: ${(props) => (props.open ? '1' : '0')};
  z-index: ${(props) => (props.open ? '100' : '-1')};
`;

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 30%;

  > a {
    display: block;
    text-align: center;
    margin-bottom: 40px;
    color: black;
    font-size: 40px;
    font-weight: 600;
  }
`;

export function HamburgerButton() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Hamburger
        onClick={() => {
          setOpen((prevOpen) => !prevOpen);
        }}
      >
        &#9776;
        <Modal open={open}>
          <ModalContent>
            <Link href="/sample/casual">HOME</Link>
            <Link href="/sample/casual/menu">MENU</Link>
            <Link href="/sample/casual/about">ABOUT</Link>
            <Link href="/sample/casual/contact">CONTACT</Link>
          </ModalContent>
        </Modal>
      </Hamburger>
    </>
  );
}

export function Logo() {
  return (
    <a href="/sample/casual">
      <img className={'logo'} src="/images/sample/casual/logo.png" width={'150px'} alt="Logo" />
    </a>
  );
}

export default function NavBar() {
  return (
    <Container className={azeretMono.className}>
      <LargeNavBar>
        <LargeNavBarLeft>
          <div>
            <Link href="/sample/casual">HOME</Link>
            <Link href="/sample/casual/menu">MENU</Link>
            <Link href="/sample/casual/about">ABOUT</Link>
          </div>
        </LargeNavBarLeft>
        <LargeNavBarCenter>
          <Logo />
        </LargeNavBarCenter>
        <LargeNavBarRight>
          <Link href="/sample/casual/contact">CONTACT</Link>
        </LargeNavBarRight>
      </LargeNavBar>
      <SmallNavBar>
        <SmallNavBarLeft>
          <Logo />
        </SmallNavBarLeft>
        <SmallNavBarRight>
          <HamburgerButton />
        </SmallNavBarRight>
      </SmallNavBar>
    </Container>
  );
}
