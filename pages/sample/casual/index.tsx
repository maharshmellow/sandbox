import Head from 'next/head';
import styled from 'styled-components';
import NavBar from '../../../components/sample/casual/NavBar';
import Image from 'next/image';
import Link from 'next/link';
import AzeretFontContainer from '@/components/sample/casual/AzeretFontContainer';

const Container = styled.div`
  border: 20px rgb(255, 229, 0) solid;
  padding: 75px;
  min-height: 100vh;

  background-color: white;
  color: black;

  letter-spacing: -0.05em;

  @media (max-width: 700px) {
    padding: 10px;
  }
`;

const ContentContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  margin-top: 150px;
`;

const Title = styled.div`
  font-size: 55px;
  font-weight: 600;
  text-align: center;
  line-height: 1.5;
  letter-spacing: -0.05em;
  padding-top: 50px;

  @media (max-width: 900px) {
    font-size: 30px;
  }
`;

const ImageWrapper = styled.div`\
  padding-top: 100px;
  width: 100%;
  max-width: 600px;
  margin: auto;
  text-align: center;
  .image {
    width: 100% !important;
    position: relative !important;
    margin: auto !important;
  }
`;

const Footer = styled.div`
  padding-top: 100px;
  text-align: center;

  > a {
    font-weight: 600;
    text-decoration: underline;
  }
  > .dark {
    color: #cccccc;
    font-size: 10px;

    > a {
      text-decoration: underline;
    }
  }
`;

export default function CasualRestaurant() {
  return (
    <>
      <Head>
        <title>Casual Restaurant</title>
        <meta name="description" content="Casual Restaurant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AzeretFontContainer>
        <Container>
          <NavBar />
          <ContentContainer>
            <Title>
              555 Wellington St.
              <br />
              Hong Kong
            </Title>
            <ImageWrapper>
              <Image
                className={'image'}
                src="/images/sample/casual/hero.jpg"
                fill={true}
                alt="Picture of a bowl of ramen"
                priority={true}
              />
            </ImageWrapper>

            <Title>
              9:00AM - 7:00PM
              <br />
              Every day
            </Title>

            <Footer>
              Made by <Link href={'https://www.maharsh.net'}>Maharsh Patel</Link> <br />
              <div className={'dark'}>
                {' '}
                (with design inspiration from{' '}
                <Link href={'https://motto-demo.squarespace.com/'}>here</Link>)
              </div>
            </Footer>
          </ContentContainer>
        </Container>
      </AzeretFontContainer>
    </>
  );
}
