import { motion, useScroll, useTransform } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { useRef } from 'react';
import styled from 'styled-components';
// import { useScroll, useTransform, motion } from 'framer-motion';

const Page = styled.div``;
const Spacer = styled.div`
  height: 50vh;
`;
const Container = styled.div`
  height: 300vh;
  background-color: red;
`;

const ImageStickySection = styled.div`
  border: 10px solid black;
  background-color: pink;

  position: sticky;
  top: 0; // top/bottom/left/right is required for sticky
  height: 100vh;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(30, minmax(0, 1fr));
  grid-template-rows: repeat(30, minmax(0, 1fr));
  // grid-gap: 10px;
`;

// all the images should be wrapped in this container because then they will have a full width container
// if you scale them, then they will all scale the same way from the center instead of from where the image is

const ImageWrapper = styled(motion.div)`
  position: relative;

  img {
    object-fit: cover;
  }
`;

export default function ZoomParallaxDemo() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // start counting progress when start of the container is at the top of the viewport
    // stop counting progress when the end of the container is at the bottom of the viewport
    offset: ['start start', 'end end'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);

  const up = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const right = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const left = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const down = useTransform(scrollYProgress, [0, 1], [0, 500]);

  const images = [
    {
      url: 'https://via.placeholder.com/600x800',
      style: {
        scale: scale,
        gridColumn: '4 / span 6',
        gridRow: '6 / span 14',
        transformOrigin: '50vw 50vh',
        // translateX: left,
      },
    },
    {
      url: 'https://via.placeholder.com/900x1000',
      style: {
        // we have a grid of 30x30
        // it is 1 indexed so it ranges from 1-31
        // to make the box centererd. we need to use indices 11-21
        // to make it scale to full viewport, we need to set the scale to 3+ because it's around 1/3 of the viewport at the beginning
        gridColumn: '11 / span 10',
        gridRow: '11 / span 10',
        scale: scale,
        border: '1px solid red',
        'z-index': '100',
      },
    },
    {
      url: 'https://via.placeholder.com/300x700',
      style: {
        gridColumn: '22 / span 7',
        gridRow: '11 / span 10',
        scale: scale,
        transformOrigin: '-43vw 5vw',
      },
    },
    {
      url: 'https://via.placeholder.com/400x700',
      style: {
        gridColumn: '11 / span 12',
        gridRow: '3 / span 7',
        scale: scale,
        transformOrigin: '20vw 60vh',
      },
    },
    {
      url: 'https://via.placeholder.com/300x700',
      style: {
        gridColumn: '3 / span 10',
        gridRow: '22 / span 7',
        scale: scale,
        transformOrigin: '53vw -30vw',
      },
    },
    {
      url: 'https://via.placeholder.com/300x700',
      style: {
        gridColumn: '14 / span 8',
        gridRow: '22 / span 7',
        scale: scale,
        transformOrigin: '-10vw -60vh',
      },
    },
    {
      url: 'https://via.placeholder.com/300x700',
      style: {
        gridColumn: '23 / span 4',
        gridRow: '22 / span 4',
        scale: scale,
        transformOrigin: '-63vw -43vh',
      },
    },
    // {
    //   url: 'https://via.placeholder.com/200x500',
    //   style: {
    //     gridColumn: '20 / span 7',
    //     gridRow: '13 / span 10',
    //     scale: scale,
    //     translateX: right,
    //   },
    // },
    // {
    //   url: 'https://via.placeholder.com/200x500',
    //   style: {
    //     gridColumn: '20 / span 13',
    //     gridRow: '20 / span 13',
    //     scale: scale,
    //     translateX: right,
    //   },
    // },
    // {
    //   url: 'https://via.placeholder.com/300x700',
    //   scale: scale,
    //   style: {
    //     top: '-100px',
    //   },
    // },
    // {
    //   url: 'https://via.placeholder.com/800x600',
    //   scale: scale,
    //   style: {
    //     top: '-100px',
    //   },
    // },
    // {
    //   url: 'https://via.placeholder.com/250x350',
    //   scale: scale,
    //   style: {
    //     top: '-100px',
    //   },
    // },
    // {
    //   url: 'https://via.placeholder.com/500x600',
    //   scale: scale,
    //   style: {
    //     top: '-100px',
    //   },
    // },
    // {
    //   url: 'https://via.placeholder.com/400x400',
    //   scale: scale,
    //   style: {
    //     top: '-100px',
    //   },
    // },
  ];

  return (
    <>
      <Head>
        <title>Zoom Parallax</title>
        <meta name="description" content="Zoom Parallax" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Page>
          <Spacer />
          <Container ref={containerRef}>
            <ImageStickySection>
              {images.map((imageObj, index) => {
                return (
                  <ImageWrapper key={index} style={imageObj.style}>
                    <Image
                      src={imageObj.url}
                      fill
                      alt="image"
                      placeholder="blur"
                      blurDataURL="https://via.placeholder.com/2x1"
                    />
                  </ImageWrapper>
                );
              })}
              {/* <ImageContainer style={{ scale }}>
                <ImageWrapper>
                  <Image
                    src="https://via.placeholder.com/1000x1000"
                    fill
                    alt="image"
                    placeholder="blur"
                    blurDataURL="https://via.placeholder.com/2x1"
                  />
                </ImageWrapper>
              </ImageContainer> */}
            </ImageStickySection>
          </Container>
          <Spacer />
        </Page>
      </main>
    </>
  );
}
