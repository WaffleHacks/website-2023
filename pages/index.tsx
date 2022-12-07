import Head from 'next/head';

import LandingFrame from '../components/LandingFrame';
import Navbar from '../components/Navbar';
import AboutFrame from '../components/AboutFrame';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="App">
        <Navbar />
        <LandingFrame />
        <AboutFrame />

      </div>
    </>
  );
}
