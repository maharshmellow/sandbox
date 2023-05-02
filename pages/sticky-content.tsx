import Head from 'next/head';
import styled from 'styled-components';

const Container = styled.div`
  // position: relative;
  // top: 0;
`;

const Card = styled.div`
  width: 60vw;
  height: 20vh;
  background-color: rgb(var(--foreground-rgb));

  border-radius: 10px;
  margin: auto;
  margin-top: 300px;
  margin-bottom: 300px;
`;

const StickyCardContainer = styled.div`
  // define how long the sticky element should stay sticky for
  height: 2000px;
`;

const StickyCard = styled.div`
  width: 60vw;
  height: 20vh;
  background-color: rgb(var(--background-rgb));
  border: 5px solid rgb(var(--foreground-rgb));
  border-radius: 10px;
  margin: auto;

  // top/bottom/left/right and position are required to make it sticky
  top: 40vh;
  position: sticky;
`;

export default function StickyContentDemo() {
  return (
    <>
      <Head>
        <title>Sticky content</title>
        <meta name="description" content="Sticky Content" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Card />
          <Card />
          <StickyCardContainer>
            <StickyCard />
          </StickyCardContainer>
          <Card />
          <StickyCardContainer>
            <StickyCard />
          </StickyCardContainer>
          <Card />
          <Card />
          <Card />
        </Container>
      </main>
    </>
  );
}
