import Head from 'next/head';
import React, { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import styles from './styles.module.css';

interface Props {
  title: string;
  children: ReactNode[];
}

const StaticLayout = ({ title, children }: Props): JSX.Element => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    <Navbar />

    <main className={styles.content}>{children}</main>

    <Footer />
  </>
);

export default StaticLayout;
