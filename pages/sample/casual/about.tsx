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
  // max-width: 1200px;
  margin: auto;
  margin-top: 150px;
`;

const Heading = styled.div`
  font-size: 35px;
  font-weight: 600;
  text-align: left;
  line-height: 1.5;
  letter-spacing: -0.05em;
  padding-top: 50px;
  width: 80%;
  max-width: 800px;
  margin: auto;
  margin-top: 100px;

  @media (max-width: 900px) {
    font-size: 20px;
    margin-top: 20px;
    width: 90%;
  }
`;

const WideImageWrapper = styled.div`\
  padding-top: 100px;
  width: 100%;
  margin: auto;
  text-align: center;
  .image {
    width: 100% !important;
    position: relative !important;
    margin: auto !important;
  }
`;

const ColumnDescription = styled.div`
  margin: 0 auto;
  display: grid;
  margin-top: 50px;
  margin-bottom: 100px;
  width: 80%;

  @media (min-width: 900px) {
    column-gap: 4rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Left = styled.div`
  text-align: center;
  @media (min-width: 900px) {
    margin-top: 100px;
  }
  line-height: 3em;
`;

const Right = styled.div`
  line-height: 2em;
  font-weight: 500;
  margin-top: 100px;
`;

const ColumnTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const SizedImage = styled.div`\
  padding-top: 100px;
  margin: auto;
  text-align: center;
`;

export default function CasualRestaurantAbout() {
  return (
    <>
      <Head>
        <title>Casual Restaurant - About</title>
        <meta name="description" content="Casual Restaurant - About" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container className={azeretMono.className}>
          <NavBar />
          <ContentContainer>
            <Heading>
              Classically trained in the art of kaiseki, Chef Sakamoto decided to leap into the
              world of ramen with his latest venture, Chotto Motto.
            </Heading>
            <WideImageWrapper>
              <Image
                className={'image'}
                src="/images/sample/casual/about1.jpg"
                fill={true}
                alt="Noodles"
              />
            </WideImageWrapper>

            <ColumnDescription>
              <Left>
                SAPPORO, JP
                <ColumnTitle>The Beginning</ColumnTitle>
                1972
              </Left>
              <Right>
                Daichi Sakamoto started cooking at age five, helping his mother prepare bentos for
                his father, younger sister, and himself. Chashu was never a missing component.
                Mother Sakamoto had learned how to make it when she studied abroad in Hong Kong. It
                was young Chef Sakamoto who mixed the marinade, a formula he perfected as he grew
                into his teens.
                <br /> <br /> <br />
                Many years later, he apprenticed under famed Chef Kazue Inoue at a luxury ryokan in
                the Nagano prefecture. There, he studied the art of kaiseki for seven years, and
                took a particular shine to the futamono and tome-wan soup-based dishes. His calling
                was starting to simmer.
              </Right>
            </ColumnDescription>

            <WideImageWrapper>
              <Image
                className={'image'}
                src="/images/sample/casual/about2.jpg"
                fill={true}
                alt="More Noodles"
              />
            </WideImageWrapper>

            <ColumnDescription>
              <Left>
                TOKYO, JP
                <ColumnTitle>The First Venture</ColumnTitle>
                1998
              </Left>
              <Right>
                After saving his wages from the Nagano apprenticeship, Chef Sakamoto took out a loan
                and opened Chotto Kai, his first restaurant in Tokyo. Using simple, seasonal
                ingredients, he was able to bring the luxury of kaiseki to all. Because he
                incorporated some of the Hong Kong flavors his mother had inspired in him, Chotto
                Kai was both a huge success and a unique contribution to Tokyo’s culinary landscape.
                <br /> <br /> <br />
                During his eighth year at Chotto Kai, he befriended ramen shop owner Rei Fukui. Chef
                Sakamoto had stopped by her front stall for a quick dinner and fell instantly in
                love with her take on the springy yet soft noodle. Every ingredient was meticulously
                prepared, just like each kaiseki course.
              </Right>
            </ColumnDescription>

            <WideImageWrapper>
              <Image
                className={'image'}
                src="/images/sample/casual/about3.jpg"
                fill={true}
                alt="Fire"
              />
            </WideImageWrapper>

            <ColumnDescription>
              <Left>
                HONG KONG
                <ColumnTitle>A New Challenge</ColumnTitle>
                2016
              </Left>
              <Right>
                Chef Sakamoto implored chef Fukui to share her methods. She said that she would only
                teach him the basics if he promised to bring the art of ramen abroad. He brought the
                proposition to his family, and his mother immediately urged him to go to Hong Kong.
                <br /> <br /> <br />
                The next week, Chef Sakamoto flew to the “Pearl City” and discovered that he felt
                more at home than ever. He knew that he could meld the umami flavors and smoky
                scents of Cantonese cuisine with the richness and nuances of ramen. He went back to
                Tokyo to learn from Chef Fukui, and with her blessing, returned to Hong Kong seven
                years later.
              </Right>
            </ColumnDescription>

            <SizedImage>
              <Image
                className={'image'}
                src="/images/sample/casual/hero.jpg"
                width={300}
                height={300}
                alt="Picture of a bowl of ramen"
              />
            </SizedImage>
          </ContentContainer>
        </Container>
      </main>
    </>
  );
}
