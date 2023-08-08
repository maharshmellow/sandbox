import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
// import one from '@/public/images/smooth-parallax-scroll/1.jpg';
// import two from '@/public/images/smooth-parallax-scroll/2.jpg';
// import three from '@/public/images/smooth-parallax-scroll/3.jpg';
// import four from '@/public/images/smooth-parallax-scroll/4.jpg';
// import five from '@/public/images/smooth-parallax-scroll/5.jpg';
// import six from '@/public/images/smooth-parallax-scroll/6.jpg';
// import seven from '@/public/images/smooth-parallax-scroll/7.jpg';
// import eight from '@/public/images/smooth-parallax-scroll/8.jpg';
// import nine from '@/public/images/smooth-parallax-scroll/9.jpg';
// import ten from '@/public/images/smooth-parallax-scroll/10.jpg';
// import eleven from '@/public/images/smooth-parallax-scroll/11.jpg';
// import twelve from '@/public/images/smooth-parallax-scroll/12.jpg';
// import Image from 'next/image';

import { useTransform, useScroll, useSpring, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis'



const Container = styled.div`
  background-color: black;
`;

const Spacer = styled.div`
  height: 100vh;
  background-color: white;
`;
const Gallery = styled.div`
  height: 100vh;
  max-width: 1500px;
  position: relative;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  margin: auto;
  padding: 10px;
`;
const Column = styled(motion.div)`
  position: relative;
  height: 100%;
  width: calc(100%/3);
  display: flex;
  flex-direction: column;
  gap: 20px; 
  padding: 10px;
`;
const ImageContainer = styled(motion.div)`
  height: 100%;
  width: 100%;

  position: relative;
  border-radius: 1vw;
  overflow: hidden;
`

const FakeImage = styled(motion.div)`
  width: 500px;
  height: 500px;
  background-color: red;
`

export default function SmoothParallaxScrollDemo() {
  const gallery = useRef(null);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  // [0, 0] would mean static 
  // [0, 100] would map 0 to 0 and 1 to 100
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const y2 = useTransform(scrollYProgress, [0, 1], [-200, 200])
  const y3 = useTransform(scrollYProgress, [0, 1], [-300, 300])

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);
  }, [])

  return (
    <>
      <Head>
        <title>Smooth Parallax Scroll</title>
        <meta name="description" content="Smooth Parallax Scroll" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Spacer></Spacer>

          <Gallery ref={gallery}>
              <Column style={{translateY: y}} key={'one'}>
              {/* ImageContainer is of type motion.div so style is getting passed to that */}
                <ImageContainer><FakeImage key={1} /></ImageContainer>
                <ImageContainer><FakeImage key={2} /></ImageContainer>
                <ImageContainer><FakeImage key={3} /></ImageContainer>
                <ImageContainer><FakeImage key={4} /></ImageContainer>
              </Column>
              <Column style={{translateY: y2}} key={'two'}>
                <ImageContainer><FakeImage key={5} /></ImageContainer>
                <ImageContainer><FakeImage key={6} /></ImageContainer>
                <ImageContainer><FakeImage key={7} /></ImageContainer>
                <ImageContainer><FakeImage key={8} /></ImageContainer>
              </Column>
              <Column style={{translateY: y3}} key={'three'}>
                <ImageContainer><FakeImage key={9} /></ImageContainer>
                <ImageContainer><FakeImage key={10} /></ImageContainer>
                <ImageContainer><FakeImage key={11} /></ImageContainer>
                <ImageContainer><FakeImage key={12} /></ImageContainer>
              </Column>
          </Gallery>

          <Spacer></Spacer>
        </Container>
      </main>
    </>
  );
}
