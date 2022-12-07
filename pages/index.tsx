import Head from 'next/head';

import LandingFrame from '../components/LandingFrame';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <LandingFrame />
    </div>
  );
}
