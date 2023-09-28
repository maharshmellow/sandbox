// inspired by https://www.timezones.digital/
import Head from 'next/head';
import styled from 'styled-components';

type TickerProps = {
  hourMark?: boolean;
};

const Card = styled.div`
  // max-width: 1400px;
  min-width: 300px;
  // height: 20vh;
  // background-color: rgb(var(--foreground-rgb));
  border: 2px solid rgb(var(--foreground-rgb));

  border-radius: 10px;
  margin: auto;
  margin-top: 300px;
  margin: 20px;
  // padding: 20px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const TickerContainer = styled.div`
  display: flex;
  height: 10px;
  margin-left: 6px;
  margin-right: 6px;
  justify-content: space-between;
`;

const Ticker = styled.div<TickerProps>`
  border-left: ${(props) => (props.hourMark ? '1px solid #000000' : '1px solid #afafaf')};
`;

const TickerLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
`;
const TickerLabel = styled.div``;

const TimeSelectorBar = styled.div`
  display: block;
  color: black;
  width: 1px;
  background-color: black;
  height: 100%;
  position: absolute;
  // right: calc(4.3% + 97 * 0.94226804%); // (95.7% - 4.3%) / 97 stops = 0.94226804%
  // left: calc(100% - 20px - 8px);
  // 100% - 20px - 8px - 1px = position of last bar including 3px for the width of the bar
  // 20px + 6px = position of first bar
  // 96 = number of ticks - 1 (in the calculation, first bar is index 0, 97bar is index 96)
  left: calc((20px + 6px) + 55 * (((100% - 20px - 6px - 1px) - (20px + 6px)) / 96));
`;

const DummyContent = styled.div`
  height: 150px;
`;

const TimeContainer = styled.div`
  position: absolute;
  right: 20px;
  left: 20px;
  bottom: 20px;
`;

export function Tickers() {
  const ticks = [];
  const ticksPerDay = 24 * 4 + 1; // +1 for midnight of next day
  for (let i = 0; i < ticksPerDay; i++) {
    ticks.push(<Ticker key={i} hourMark={i % 4 === 0} />);
  }

  return <TickerContainer>{ticks}</TickerContainer>;
}

export function TickerLabels() {
  const labels = [12, 6, 12, 6, 12];

  return (
    <TickerLabelContainer>
      {labels.map((label, index) => (
        <TickerLabel key={`${label}_${index}`}>{label}</TickerLabel>
      ))}
    </TickerLabelContainer>
  );
}

export default function TimeTickerDemo() {
  return (
    <>
      <Head>
        <title>Time Ticker</title>
        <meta name="description" content="Time Ticker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Card>
          <TimeSelectorBar />
          <DummyContent />
          <TimeContainer>
            <Tickers />
            <TickerLabels />
          </TimeContainer>
        </Card>
      </main>
    </>
  );
}
