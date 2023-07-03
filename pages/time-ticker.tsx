// inspired by https://www.timezones.digital/
import Head from 'next/head';
import styled from 'styled-components';

type TickerProps = {
  hourMark?: boolean;
};

const Card = styled.div`
  max-width: 600px;
  min-width: 300px;
  // height: 20vh;
  // background-color: rgb(var(--foreground-rgb));
  border: 1px solid rgb(var(--foreground-rgb));

  border-radius: 10px;
  margin: auto;
  margin-top: 300px;
  padding: 20px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const TickerContainer = styled.div`
  display: flex;
  height: 8px;
  margin-left: 5px;
  margin-right: 5px;
  // justify-content: space-between;
`;

const Ticker = styled.div<TickerProps>`
  // border-left: 1px solid rgb(var(--foreground-rgb));
  border-left: ${(props) => (props.hourMark ? '1px solid #000000' : '1px solid #afafaf')};
  width: calc(1.0309278%); // 100 / 97 = 1.0309278 -> number of ticks in the day
`;

const TickerLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500px;
`;
const TickerLabel = styled.div``;

const TimeSelectorBar = styled.div`
  display: block;
  color: black;
  width: 1px;
  background-color: black;
  height: 100%;
  position: absolute;
  right: calc(4.3% + 97 * 0.94226804%); // (95.7% - 4.3%) / 97 stops = 0.94226804%
  transform: translateX(50%);
  // left: calc(20px + 16 * 5.6391753px); // 572px - 25px = 547px / 97 steps = 5.6391753px
`;

const DummyContent = styled.div`
  height: 150px;
`;

const TimeContainer = styled.div`
  position: absolute;
  right: 20px;
  left: 20px;
  bottom: 16px;
  // background-color: red;
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
      {labels.map((label) => (
        <TickerLabel key={label}>{label}</TickerLabel>
      ))}
    </TickerLabelContainer>
  );
}

export function TimeSelector() {
  return <TimeSelectorBar />;
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
          <TimeSelector />
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
