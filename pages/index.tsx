import Footer from '../components/Footer';
import LandingFrame from '../components/LandingFrame';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <LandingFrame />
      <Footer />
    </div>
  );
}
