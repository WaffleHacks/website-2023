import LandingFrame from '@/components/LandingFrame';
import Navbar from '@/components/Navbar';
import styles from '@/styles/Index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <LandingFrame />
    </div>
  );
}
