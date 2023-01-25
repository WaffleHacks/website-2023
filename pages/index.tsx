import AboutFrame from '../components/AboutFrame';
import CalendarFrame from '../components/CalendarFrame';
import CrewFrame from '../components/CrewFrame';
import FaqFrame from '../components/FaqFrame';
import Footer from '../components/Footer';
import LandingFrame from '../components/LandingFrame';
import Navbar from '../components/Navbar';
import SponsorsFrame from '../components/SponsorsFrame';
import TracksFrame from '../components/TracksFrame';

export default function Home() {
  return (
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
  );
}
