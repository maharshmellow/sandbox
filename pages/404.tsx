import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { useMousePosition } from '../utils/hooks/useMousePosition';

type SpotlightProps = {
  x: number;
  y: number;
};

const Page = styled.div`
  background-color: rgb(14, 20, 27);
  height: 100vh;
  display: grid;
  cursor: none;
`;
const Container = styled.div`
  place-self: center;
`;
const Title = styled.div`
  font-size: 144px;
  font-weight: 600;
  color: white;

  @media (max-width: 768px) {
    font-size: 64px;
  }
`;

const Subtitle = styled.div`
  font-size: 54px;
  font-weight: 300;
  color: white;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Spotlight = styled.div<SpotlightProps>`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: ${(props) =>
    `radial-gradient(20vh at ${props.x}px ${props.y}px, transparent 10%, rgba(0, 0, 0, 0.9) 100%)`};

  // allow text selection on page
  pointer-events: none;
`;

const Cursor = styled.div<SpotlightProps>`
  position: absolute;
  left: ${(props) => `${props.x}px`};
  top: ${(props) => `${props.y}px`};

  height: 10px;
  width: 10px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  mix-blend-mode: difference;
`;

export default function Custom404() {
  const { x, y } = useMousePosition();

  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="404 Page Not Found" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Spotlight x={x} y={y}></Spotlight>
        <Cursor x={x} y={y}></Cursor>

        <Container>
          <Title>Not found</Title>
          <Subtitle>Sorry, there is nothing at this URL</Subtitle>
        </Container>
      </Page>
    </>
  );
}
