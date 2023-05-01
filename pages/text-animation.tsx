import Head from 'next/head';
import { ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: grid;
  height: 100vh;
`;

const fancyFade = keyframes`
  0% { opacity: 0; transform: translateY(20px) translate3d(-3px, -40px, -15px) rotate3d(1, -1, 0, 35deg)}
  75% { opacity: 1; transform: translateY(0px)}
  100% { opacity: 1}
`;

const slideUp = keyframes`
  0% { opacity: 0; transform: translateY(20px)}
  75% { opacity: 1; transform: translateY(0px)}
  100% { opacity: 1}
`;

const Title = styled.h1`
  place-self: center;
  color: black;
  font-size: 5vw;
  letter-spacing: -4px;
  opacity: 0;
  animation: ${fancyFade} 1s ease-in-out forwards;
`;

const Subtext = styled.h3`
  place-self: center;
  color: black;
  font-weight: 500;
  opacity: 0;
  animation: ${slideUp} 0.5s ease-in-out forwards 1.5s;
`;

export default function TextAnimationDemo() {
  return (
    <>
      <Head>
        <title>Text Animation</title>
        <meta name="description" content="Text Animation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Title>Arc Design Studio.</Title>
          <Subtext>Scroll to see our projects</Subtext>
        </Container>
      </main>
    </>
  );
}
