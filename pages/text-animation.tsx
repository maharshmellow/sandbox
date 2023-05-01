import Head from 'next/head';
import { ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: grid;
  height: 100vh;
`;

const fancyFade = keyframes`
  // starting from 0.01 looks less choppy 
  0% { opacity: 0.01; transform: translateY(15px) rotate3d(40, 21, 15, 40deg)}
  75% { opacity: 1; transform: translateY(0px)}
  100% { opacity: 1}
`;

const slideUp = keyframes`
  0% { opacity: 0; transform: translateY(20px)}
  100% { opacity: 1}
`;

const TitleContainer = styled.div`
  // background-color: blue;
  text-align: center;
  margin: auto;
  font-size: 60px;
  font-weight: 600;
`;

const TitleChar = styled.span<{ index: number }>`
  display: inline-block; // span elements can't be animated without this property
  white-space: pre;
  opacity: 0;
  animation: ${fancyFade} 0.5s ease-in-out forwards;
  animation-delay: ${(props) => props.index * 0.02}s;
`;

const Subtext = styled.h3`
  place-self: center;
  color: black;
  font-weight: 500;
  opacity: 0;
  animation: ${slideUp} 0.5s ease-in-out forwards 1.5s;
`;

function AnimatedText(props: { text: string }) {
  const { text } = props;

  const spans = text.split('').map((char: string, idx: number) => (
    <TitleChar key={char} index={idx}>
      {char}
    </TitleChar>
  ));

  return <TitleContainer>{spans}</TitleContainer>;
}

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
          <AnimatedText text="Arc Design Studio." />
          <Subtext>Scroll to see our projects</Subtext>
        </Container>
      </main>
    </>
  );
}
