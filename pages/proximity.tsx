import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const MIN_SCALE = 1.0;
const MAX_SCALE = 1.3;

interface ButtonProps {
  scale: number;
}

const DebugText = styled.div`
  text-align: center;
  color: white;
  padding: 15px;
  background-color: black;
  position: absolute;
  width: 100%;
`;

const Container = styled.div`
  display: grid;
  height: 100vh;
`;

const Element = styled.div<ButtonProps>`
  place-self: center;
  font-size: 15px;
  scale: ${(props) => props.scale};
  background-color: black;
  padding: 25px;
  color: white;
`;

function calculateDistance(elem: HTMLDivElement | null, mouseX: number, mouseY: number) {
  if (elem) {
    return Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (elem.offsetLeft + elem.clientWidth / 2), 2) +
          Math.pow(mouseY - (elem.offsetTop + elem.clientHeight / 2), 2),
      ),
    );
  }

  return Infinity;
}

export function ProximityDiv() {
  const proximityElement = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(MIN_SCALE);

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number }) => {
      const distance = calculateDistance(proximityElement.current, event.clientX, event.clientY);
      setScale(Math.max(MIN_SCALE, MAX_SCALE - distance / 1500));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <DebugText>The scale is {scale}</DebugText>

      <Container>
        <Element ref={proximityElement} scale={scale}>
          Come close to me
        </Element>
      </Container>
    </>
  );
}

export default function ProximityDemo() {
  return (
    <>
      <Head>
        <title>Proximity Demo</title>
        <meta name="description" content="Proximity Demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ProximityDiv />
      </main>
    </>
  );
}
