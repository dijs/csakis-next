import '../styles/index.scss';
import Nav from '../components/Nav';
import NavToggle from '../components/NavToggle';
import { StoreProvider } from '../components/Store';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <StoreProvider>
        <Nav />
        <NavToggle />
        <Component {...pageProps} />
      </StoreProvider>
    </div>
  );
}
