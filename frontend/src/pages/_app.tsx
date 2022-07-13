import '../styles/globals.scss'
import '../styles/others.css';
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import Main from '../components/layouts/Main';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle");
    }, []);
  return (
    <>
        <Main>
            <Component {...pageProps} />
        </Main>
        <Script strategy="afterInteractive" src="/js/scroll.js"/>
        <Script strategy="afterInteractive" src="/js/feather.min.js"/>
        <Script strategy="afterInteractive" src="/js/pcoded.js"/>
    </>
  )
  
}

export default MyApp
