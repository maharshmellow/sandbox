import Head from 'next/head';
import styled from 'styled-components';
import NavBar from '../../../components/sample/casual/NavBar';
import Image from 'next/image';
import Link from 'next/link';
import AzeretFontContainer from '@/components/sample/casual/AzeretFontContainer';
import hero from '@/public/images/sample/casual/hero.jpg';
import divider from '@/public/images/sample/casual/divider.png';

const Container = styled.div`
  border: 20px rgb(255, 229, 0) solid;
  padding: 75px;
  min-height: 100vh;

  background-color: white;
  color: black;

  letter-spacing: -0.05em;

  @media (max-width: 768px) {
    padding: 10px;
    border: none;
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

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const ImageWrapper = styled.div`
  display: block;
  text-align: center;
  padding-top: 100px;
  .image {
    position: relative !important;
    margin: auto !important;
    object-fit: contain;
    max-width: 600px;
  }
`;

const Footer = styled.div`
  padding-top: 100px;
  text-align: center;

  > a {
    font-weight: 600;
    text-decoration: underline;
  }
`;

const Divider = styled.div`\
  padding-top: 100px;
  margin: auto;
  text-align: center;
`;

export default function CasualRestaurant() {
  return (
    <>
      <Head>
        <title>Casual Restaurant</title>
        <meta name="description" content="Casual Restaurant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/sample/casual/favicon.ico" />
      </Head>
      <AzeretFontContainer>
        <Container>
          <NavBar />
          <ContentContainer>
            <Title>
              121 Demo St.
              <br />
              Hong Kong
            </Title>
            <ImageWrapper>
              <Image
                className={'image'}
                src={hero}
                fill={true}
                alt="Picture of a bowl of ramen"
                priority={true}
                sizes="(min-width: 768px) 512px, (min-width: 1024px) 750px, 320px"
              />
            </ImageWrapper>

            <Divider>
              <Image
                className={'image'}
                src={divider}
                width={100}
                height={50}
                alt="Divider"
                quality={20}
              />
            </Divider>

            <Title>
              9:00AM - 7:00PM
              <br />
              Every day
            </Title>

            <Divider>
              <Image
                className={'image'}
                src={divider}
                width={100}
                height={50}
                alt="Divider"
                quality={20}
              />
            </Divider>

            <Footer>
              Made by <Link href={'https://www.maharsh.net'}>Maharsh Patel</Link> <br />
            </Footer>
          </ContentContainer>
        </Container>
      </AzeretFontContainer>
    </>
  );
}
