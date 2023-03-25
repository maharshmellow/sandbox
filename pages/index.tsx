import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sandbox</title>
        <meta name="description" content="Sandbox Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Sandbox Website |&nbsp;
            <code className={styles.code}>Coming Soon</code>
          </p>
        </div>

        <Link href="/demo">Demo Page</Link>
      </main>
    </>
  );
}
