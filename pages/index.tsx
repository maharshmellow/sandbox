import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  padding: 100px;
`;

const StyledLink = styled.div`
  font-family: var(--font-mono);
  padding: 20px;
  transition: 0.2s;
  color: rgb(var(--foreground-rgb));
  background-color: rgb(var(--background-rgb));

  &:hover {
    color: rgb(var(--background-rgb));
    background-color: rgb(var(--foreground-rgb));
    scale: 1.02;
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
        <Link href="/proximity" passHref>
          <StyledLink>Proximity</StyledLink>
        </Link>
        <Link href="/text-animation" passHref>
          <StyledLink>Text Animation</StyledLink>
        </Link>
        <Link href="/sticky-content" passHref>
          <StyledLink>Sticky Content</StyledLink>
        </Link>
        <Link href="/smooth-parallax-scroll" passHref>
          <StyledLink>Smooth Parallax Scroll</StyledLink>
        </Link>
        <Link href="/404" passHref>
          <StyledLink>404 Page</StyledLink>
        </Link>
      </Container>
    </>
  );
}
