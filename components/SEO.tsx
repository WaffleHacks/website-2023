import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://wafflehacks.org';

interface Props {
  title?: string;
  description?: string;
  children: ReactNode | ReactNode[];
}

const SEO = ({ title, description = "We're hackers with heart.", children }: Props): JSX.Element => {
  const router = useRouter();
  const fullTitle = title ? `WaffleHacks - ${title}` : 'WaffleHacks 2023';

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{fullTitle}</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@wafflehacks" />
        <meta name="twitter:creator" content="@wafflehacks" />
        <meta property="og:url" content={BASE_URL + router.pathname} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/images/logo.png" />
      </Head>
      {children}
    </>
  );
};

export default SEO;
