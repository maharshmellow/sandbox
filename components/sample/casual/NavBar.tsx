/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import AzeretFontContainer from './AzeretFontContainer';

const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  font-weight: 500;
  font-size: 15px;
`;

const LargeNavBar = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SmallNavBar = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: white;
  padding: 10px 20px 10px 20px;
  @media (min-width: 768px) {
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
  position: fixed;
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

export function Logo() {
  return (
    <Link href="/sample/casual">
      <img className={'logo'} src="/images/sample/casual/logo.png" width={'125px'} alt="Logo" />
    </Link>
  );
}

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <AzeretFontContainer>
      <Container>
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
            <Hamburger onClick={toggleOpen}>&#9776;</Hamburger>
          </SmallNavBarRight>
        </SmallNavBar>
        <Modal open={open} onClick={toggleOpen}>
          <ModalContent>
            <Link href="/sample/casual">HOME</Link>
            <Link href="/sample/casual/menu">MENU</Link>
            <Link href="/sample/casual/about">ABOUT</Link>
            <Link href="/sample/casual/contact">CONTACT</Link>
          </ModalContent>
        </Modal>
      </Container>
    </AzeretFontContainer>
  );
}
