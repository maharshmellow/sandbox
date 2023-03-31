import Head from 'next/head';
import Link from 'next/link';
// import styles from '@/styles/Home.module.css';
import styled from 'styled-components';

const Container = styled.div`
  padding: 100px;
`;

const Project = styled.div`
  font-family: var(--font-mono);
  padding: 20px;
  transition: 0.1s;
  color: rgb(var(--foreground-rgb));
  background-color: rgb(var(--background-rgb));

  &:hover {
    color: rgb(var(--background-rgb));
    background-color: rgb(var(--foreground-rgb));
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Sandbox</title>
        <meta name="description" content="Sandbox Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Project>
          <Link href="/proximity">Proximity</Link>
        </Project>
        {/* <Project>
          <Link href="/proximity">Proximity</Link>
        </Project> */}
      </Container>
    </>
  );
}
