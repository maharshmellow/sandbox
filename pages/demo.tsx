import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Demo() {
  return (
    <>
      <Head>
        <title>Demo</title>
        <meta name="description" content="Demo Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Demo Page</p>
        </div>
      </main>
    </>
  );
}
