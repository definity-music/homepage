import type { AppContext, AppProps } from "next/app";

import { GlobalStyle, Main } from "../components/Utils";
import "@fontsource/rubik";
import "@fontsource/rubik/700.css";
import { SpotifyOEmbedResult } from "../utils/spotify/fetchSpotifyOEmbed";
import { Footer } from "../components/Footer";

import { loadStarsPreset } from "tsparticles-preset-stars";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import GA from "react-ga4";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import { ConsentProvider } from "../contexts/ConsentContext";

const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });
const ConsentBanner = dynamic(
  () => import("../components/ConsentBanner").then((mod) => mod.ConsentBanner),
  { ssr: false }
);

export default function App({
  Component,
  pageProps,
}: AppProps & { playlists: SpotifyOEmbedResult[] }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      GA.send({ hitType: "pageview", page: url });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  if (router.route.includes("/redirect/")) {
    return (
      <CookiesProvider>
        <ConsentProvider>
          <Component {...pageProps}></Component>
        </ConsentProvider>
      </CookiesProvider>
    );
  }

  return (
    <CookiesProvider>
      <ConsentProvider>
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
        <ConsentBanner />
      </ConsentProvider>
    </CookiesProvider>
  );
}
