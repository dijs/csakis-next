import Nav from '../components/Nav';
import NavToggle from '../components/NavToggle';
import { StoreProvider } from '../components/Store';
import Head from 'next/head';
import '../styles/index.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Csakis</title>
      </Head>
      <StoreProvider>
        <Nav />
        <NavToggle />
        <Component {...pageProps} />
      </StoreProvider>
    </div>
  );
}
