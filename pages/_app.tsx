import type { AppProps } from "next/app";

import { GlobalStyle, Main } from "../components/Utils";
import "@fontsource/rubik";
import "@fontsource/rubik/700.css";
import { SpotifyOEmbedResult } from "../utils/spotify/fetchSpotifyOEmbed";
import { Footer } from "../components/Footer";

import { loadStarsPreset } from "tsparticles-preset-stars";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { browserWrapper } from "../utils/helpers/browserWrapper";
import { pageview, initialize } from "react-ga";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Script from "next/script";

const TRACKING_ID = "G-8DMLZVERLT"; // OUR_TRACKING_ID

const { isBrowser } = browserWrapper;

const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });

export default function App({
  Component,
  pageProps,
}: AppProps & { playlists: SpotifyOEmbedResult[] }) {
  const router = useRouter();
  useEffect(() => {
    initialize(TRACKING_ID);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  if (router.route.includes("track-redirect")) {
    return <Component {...pageProps}></Component>;
  }
  return (
    <>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-8DMLZVERLT');
        `}
      </Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8DMLZVERLT"
        async
      />
      <Particles
        options={{
          preset: "stars",
          background: { color: "#252525" },
          particles: { move: { speed: 0.6 } },
        }}
        init={async (engine) => {
          await loadStarsPreset(engine);
        }}
      />
      <GlobalStyle />
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  );
}
