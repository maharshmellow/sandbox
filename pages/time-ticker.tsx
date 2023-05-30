import Head from 'next/head';
import styled from 'styled-components';

type TickerProps = {
  hourMark?: boolean;
};

const Card = styled.div`
  max-width: 600px;
  min-width: 300px;
  height: 20vh;
  // background-color: rgb(var(--foreground-rgb));
  border: 1px solid rgb(var(--foreground-rgb));

  border-radius: 10px;
  margin: auto;
  margin-top: 300px;
  padding: 20px;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const TickerContainer = styled.div`
  display: flex;
  height: 8px;
  margin-left: 5px;
  margin-right: 5px;
  justify-content: space-between;
`;

const Ticker = styled.div<TickerProps>`
  // border-left: 1px solid rgb(var(--foreground-rgb));
  border-left: ${(props) => (props.hourMark ? '1px solid #000000' : '1px solid #afafaf')};
  // width: calc(1.0309278%); // 100 / 97 = 1.0309278 -> number of ticks in the day
`;

const TickerLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500px;
`;
const TickerLabel = styled.div``;

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
          <Tickers />
          <TickerLabels />
        </Card>
      </main>
    </>
  );
}
