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
const Column = styled.div`
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

export default function SmoothParallaxScrollDemo() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.5])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
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

          <Gallery>
              <Column style={{top: '-45%'}}>
              {/* ImageContainer is of type motion.div so style is getting passed to that */}
                <ImageContainer style={{y}}><Image priority src={one} alt="" /></ImageContainer>
                <ImageContainer style={{y}}><Image priority src={two} alt="" /></ImageContainer>
                <ImageContainer style={{y}}><Image priority src={three} alt="" /></ImageContainer>
                <ImageContainer style={{y}}><Image priority src={four} alt="" /></ImageContainer>
              </Column>
              <Column style={{top: '-95%'}}>
                <ImageContainer style={{y: y2}}><Image priority src={five} alt="" /></ImageContainer>
                <ImageContainer style={{y: y2}}><Image priority src={six} alt="" /></ImageContainer>
                <ImageContainer style={{y: y2}}><Image priority src={seven} alt="" /></ImageContainer>
                <ImageContainer style={{y: y2}}><Image priority src={eight} alt="" /></ImageContainer>
              </Column>
              <Column style={{top: '-45%'}}>
                <ImageContainer style={{y: y3}}><Image priority src={nine} alt="" /></ImageContainer>
                <ImageContainer style={{y: y3}}><Image priority src={ten} alt="" /></ImageContainer>
                <ImageContainer style={{y: y3}}><Image priority src={eleven} alt="" /></ImageContainer>
                <ImageContainer style={{y: y3}}><Image priority src={twelve} alt="" /></ImageContainer>
              </Column>
          </Gallery>

          <Spacer></Spacer>
        </Container>
      </main>
    </>
  );
}