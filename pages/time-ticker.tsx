import Head from 'next/head';
import styled from 'styled-components';

type TickerProps = {
  hourMark?: boolean;
};

const Card = styled.div`
  max-width: 600px;
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
`;

const Ticker = styled.div<TickerProps>`
  // border-left: 1px solid rgb(var(--foreground-rgb));
  border-left: ${(props) => (props.hourMark ? '1px solid #000000' : '1px solid #afafaf')};
  width: calc(1.0309278%); // 100 / 97 = 1.0309278 -> number of ticks in the day
`;

export function Tickers() {
  const ticks = [];
  const ticksPerDay = 24 * 4 + 1; // +1 for midnight of next day
  for (let i = 0; i < ticksPerDay; i++) {
    if (i % 4 === 0) {
      ticks.push(<Ticker hourMark />);
    } else {
      ticks.push(<Ticker />);
    }
  }

  return <TickerContainer>{ticks}</TickerContainer>;
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
        <div>
          <Card>
            <Tickers />
          </Card>
        </div>
      </main>
    </>
  );
}
