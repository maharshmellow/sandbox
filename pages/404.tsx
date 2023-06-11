import Head from 'next/head';
import styled from 'styled-components';
import { useMousePosition } from '../utils/hooks/useMousePosition';
import { Inter } from 'next/font/google';

// swap allows it to load during development as well
const inter = Inter({ subsets: ['latin'], display: 'swap' });

type SpotlightProps = {
  x: number;
  y: number;
};

const Page = styled.div`
  background-color: rgb(14, 20, 27);
  height: 100vh;
  display: grid;
  cursor: none;
  overflow: hidden;

  @media (max-width: 768px) {
    cursor: unset;
  }
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
    `radial-gradient(20vh at ${props.x}px ${props.y}px, transparent 10%, rgba(0, 0, 0, 0.99) 100%)`};

  // allow text selection on page
  pointer-events: none;

  @media (max-width: 768px) {
    background-image: none;
  }
`;

const Cursor = styled.div<SpotlightProps>`
  position: absolute;
  left: ${(props) => `${props.x - 10}px`};
  top: ${(props) => `${props.y - 10}px`};

  height: 10px;
  width: 10px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  mix-blend-mode: difference;

  @media (max-width: 768px) {
    display: none;
  }
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
      <Page className={inter.className}>
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
