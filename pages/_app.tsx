import type { AppProps } from 'next/app';

import 'normalize.css/normalize.css';
import '@/styles/globals.css';
import '@/styles/flipbook.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
