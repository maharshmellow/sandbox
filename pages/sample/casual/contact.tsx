import Head from 'next/head';
import styled from 'styled-components';
import NavBar from '../../../components/sample/casual/NavBar';
import Image from 'next/image';
import AzeretFontContainer from '@/components/sample/casual/AzeretFontContainer';
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

const Subtitle = styled.div`
  font-size: 25px;
  text-align: center;
  letter-spacing: -0.05em;
  padding-top: 50px;

  @media (max-width: 768px) {
    font-size: 15px;
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
      <AzeretFontContainer>
        <Container>
          <NavBar />
          <ContentContainer>
            <Title>
              555 Wellington St.
              <br />
              Central, HK
              <br />+ 852 1234 5678
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

            <br />
            <br />

            <Title>
              9:00AM - 7:00PM
              <br />
              Every day
            </Title>

            <Divider>
              <Image className={'image'} src={divider} width={100} height={50} alt="Divider" />
            </Divider>

            <br />
            <br />

            <Subtitle>contact@chottomotto.com</Subtitle>
          </ContentContainer>
        </Container>
      </AzeretFontContainer>
    </>
  );
}
