import Footer from '@/components/Footer';
import LandingFrame from '@/components/LandingFrame';
import Navbar from '@/components/Navbar';
import SEO from '@/components/SEO';
import styles from '@/styles/Index.module.css';

export default function Home() {
  return (
    <SEO>
      <div className={styles.container}>
        <Navbar />
        <LandingFrame />
        <Footer />
      </div>
    </SEO>
  );
}
