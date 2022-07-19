import "../styles/globals.scss";
import "../styles/others.css";
import type { AppProps } from "next/app";
import { useContext, useEffect } from "react";
import Main from "../components/layouts/Main";
import Script from "next/script";
import { useRouter } from "next/router";
import { Roles } from "../types/Roles";
import Unauthorized from "../components/errors/Unauthorized";
import routeRoles from "../config/RouteRoles";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  const router = useRouter();
  const userRole = Roles.VEREADOR;

  let can = true;
  if(routeRoles.has(router.pathname) && !routeRoles.get(router.pathname)?.includes(userRole)) {
    can = false;
  }

  const ComponentToRender = can ? Component : Unauthorized;
  
  return (
    <>
      <Main>
        <ComponentToRender {...pageProps} />
      </Main>
      <Script strategy="afterInteractive" src="/js/scroll.js" />
      <Script strategy="afterInteractive" src="/js/feather.min.js" />
      <Script strategy="afterInteractive" src="/js/pcoded.js" />
    </>
  );
}

export default MyApp;
