import {AppProps} from "next/app";
import { Roboto } from 'next/font/google'
import {NextPage} from "next";
import {ReactElement, ReactNode} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './../styles/app.css';

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <main className={roboto.className}>
      {getLayout(<Component {...pageProps} />)}
    </main>
  );
}

export default App;
