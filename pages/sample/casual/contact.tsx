import Head from 'next/head';
import styled from 'styled-components';
import { Azeret_Mono } from 'next/font/google';
import NavBar from '../../../components/sample/casual/NavBar';
import Image from 'next/image';
import Link from 'next/link';

// swap allows it to load during development as well
const azeretMono = Azeret_Mono({ subsets: ['latin'], display: 'swap' });

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
  max-width: 800px;
  margin: auto;
  text-align: center;
  .image {
    width: 100% !important;
    position: relative !important;
    margin: auto !important;
  }
`;

const Divider = styled.div`\
  padding-top: 100px;
  margin: auto;
  text-align: center;
`;

export default function CasualRestaurantContact() {
  return (
    <>
      <Head>
        <title>Casual Restaurant - Contact</title>
        <meta name="description" content="Casual Restaurant - Contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container className={azeretMono.className}>
          <NavBar />
          <ContentContainer>
            <ImageWrapper>
              <Image
                className={'image'}
                src="/images/sample/casual/location.png"
                fill={true}
                alt="Map with the location of the restaurant"
              />
            </ImageWrapper>
            <Title>
              555 Wellington St.
              <br />
              Central, HK
              <br />+ 852 1234 5678
            </Title>

            <Divider>
              <Image
                className={'image'}
                src="/images/sample/casual/divider.png"
                width={100}
                height={50}
                alt="Divider"
              />
            </Divider>

            <br />
            <br />

            <Title>
              9:00AM - 7:00PM
              <br />
              Every day
            </Title>
          </ContentContainer>
        </Container>
      </main>
    </>
  );
}
