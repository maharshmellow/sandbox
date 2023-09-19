import Head from 'next/head';
import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  height: 100vh;
`;

const DemoContainer = styled.div`
  min-height: 300px;
  max-width: 800px;
  background-color: rgb(248, 248, 248);
  border: 1px solid #ededed;

  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 300px;
  display: flex; // just to allow the next line
  align-items: center; // vertically center

  @media (max-width: 768px) {
    width: 95vw;
    min-height: 200px;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 26px;
`;

const TabButton = styled.button`
  // clear default button style
  color: black;
  outline: none;
  background-color: transparent;
  border: none;

  border-radius: 9999px;
  padding: 0;
  font-size: 14px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  position: relative; // to make the Pill absolute position work

  -webkit-appearance: none;
`;

const Pill = styled(motion.div)`
  background-color: white;
  position: absolute;
  height: 100%;
  width: 100%;
  // the next line replaces the following 4 lines
  inset: 0;
  // right: 0;
  // left: 0;
  // top: 0;
  // bottom: 0;

  border-radius: 9999px;
  mix-blend-mode: exclusion;
  z-index: 10;
`;

export function ExclusionTabs() {
  const tabs = ['All', 'Software', 'Design', 'Architecture'];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <TabsContainer>
      {tabs.map((tabName) => {
        return (
          <TabButton onClick={() => setActiveTab(tabName)} key={tabName}>
            {/* Pill is a motion.div component */}
            {activeTab === tabName && (
              <Pill
                // just keep this id consistent and framer motion will automatically animate the transition
                layoutId={'pill'}
                // pass in border radius because framer motion can't read the border radius from styled components
                // otherwise if we transition from a small pill to a big pill ("all" -> "architecture") then it looks janky
                style={{ borderRadius: 9999 }}
                transition={{ type: 'spring', bounce: 0.1, duration: 0.5 }}
              />
            )}

            {tabName}
          </TabButton>
        );
      })}
    </TabsContainer>
  );
}

export default function ExclusionTabsDemo() {
  return (
    <>
      <Head>
        <title>Exclusion Tabs</title>
        <meta name="description" content="Exclusion Tabs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <DemoContainer>
            <ExclusionTabs />
          </DemoContainer>
        </Container>
      </main>
    </>
  );
}
