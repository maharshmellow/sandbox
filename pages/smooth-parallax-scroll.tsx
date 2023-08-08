import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import one from '@/public/images/smooth-parallax-scroll/1.jpg';
import two from '@/public/images/smooth-parallax-scroll/2.jpg';
import three from '@/public/images/smooth-parallax-scroll/3.jpg';
import four from '@/public/images/smooth-parallax-scroll/4.jpg';
import five from '@/public/images/smooth-parallax-scroll/5.jpg';
import six from '@/public/images/smooth-parallax-scroll/6.jpg';
import seven from '@/public/images/smooth-parallax-scroll/7.jpg';
import eight from '@/public/images/smooth-parallax-scroll/8.jpg';
import nine from '@/public/images/smooth-parallax-scroll/9.jpg';
import ten from '@/public/images/smooth-parallax-scroll/10.jpg';
import eleven from '@/public/images/smooth-parallax-scroll/11.jpg';
import twelve from '@/public/images/smooth-parallax-scroll/12.jpg';
import Image from 'next/image';

import { useTransform, useScroll, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis'



const Container = styled.div`
  background-color: black;
`;

const Spacer = styled.div`
  height: 100vh;
  background-color: white;
`;
const Gallery = styled.div`
  height: 175vh;
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
const ImageContainer = styled.div`
  height: 100%;
  width: 100%;

  position: relative;
  border-radius: 1vw;
  overflow: hidden;
`

export default function SmoothParallaxScrollDemo() {
  const gallery = useRef(null);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  // [0, 0] would mean static 
  // [0, 100] would map 0 to 0 and 1 to 100
  const y = useTransform(scrollYProgress, [0, 1], [0, 1000])
  const y2 = useTransform(scrollYProgress, [0, 1], [300, 1200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 1500])

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
              <Column style={{top: '-25%', y: y}}>
              {/* ImageContainer is of type motion.div so style is getting passed to that */}
                <ImageContainer><Image priority src={one} alt="" /></ImageContainer>
                <ImageContainer><Image priority src={two} alt="" /></ImageContainer>
                <ImageContainer><Image priority src={three} alt="" /></ImageContainer>
                <ImageContainer><Image priority src={four} alt="" /></ImageContainer>
              </Column>
              <Column style={{top: '-25%', y: y2}}>
                <ImageContainer><Image priority src={five} alt="" /></ImageContainer>
                <ImageContainer><Image priority src={six} alt="" /></ImageContainer>
                <ImageContainer><Image priority src={seven} alt="" /></ImageContainer>
                <ImageContainer><Image priority src={eight} alt="" /></ImageContainer>
              </Column>
              <Column style={{top: '-25%', y: y3}}>
                <ImageContainer><Image priority src={nine} alt="" /></ImageContainer>
                <ImageContainer><Image priority src={ten} alt="" /></ImageContainer>
                <ImageContainer><Image priority src={eleven} alt="" /></ImageContainer>
                <ImageContainer><Image priority src={twelve} alt="" /></ImageContainer>
              </Column>
          </Gallery>

          <Spacer></Spacer>
        </Container>
      </main>
    </>
  );
}
