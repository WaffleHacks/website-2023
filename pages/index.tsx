import { createContext, useState } from 'react';

import AboutFrame from '../components/AboutFrame';
import CalendarFrame from '../components/CalendarFrame';
import CrewFrame from '../components/CrewFrame';
import FaqFrame from '../components/FaqFrame';
import Footer from '../components/Footer';
import LandingFrame from '../components/LandingFrame';
import Navbar from '../components/Navbar';
import SponsorsFrame from '../components/SponsorsFrame';
import TracksFrame from '../components/TracksFrame';

export const ScavContext = createContext({
  on: false,
  path: 0,
  setPath: (path: number) => {},
});

export default function Home() {
  const [path, setPath] = useState(0);

  return (
    <ScavContext.Provider value={{ on: false, path, setPath: () => {} }}>
      <div className="App">
        <Navbar />
        <LandingFrame />
        <AboutFrame />
        <TracksFrame />
        <CalendarFrame />
        <FaqFrame />
        <CrewFrame />
        <SponsorsFrame />
        <Footer />
      </div>
    </ScavContext.Provider>
  );
}
