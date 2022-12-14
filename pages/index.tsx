import Head from "next/head";

import { useEffect } from "react";
import {
  BoldText,
  Container,
  Grid,
  Headline,
  ResponsiveImage,
  Text,
  Whitespace,
} from "../components/Utils";
import { playlistUrls } from "../playlistUrls";

import {
  fetchSpotifyOEmbed,
  SpotifyOEmbedResult,
} from "../utils/spotify/fetchSpotifyOEmbed";
import logo from "public/assets/defnity_w_ohnekreis.png";

import Link from "next/link";
import styled from "styled-components";

export async function getStaticProps() {
  const playlists = await Promise.all(
    playlistUrls.map((playlistUrl) => fetchSpotifyOEmbed(playlistUrl.url))
  );

  return {
    props: {
      playlists,
    },
    revalidate: 43200, //12h
  };
}

const PlaylistImage = styled(ResponsiveImage)`
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
`;

export default function Home({
  playlists,
}: {
  playlists: SpotifyOEmbedResult[] | undefined;
}) {
  return (
    <Container>
      <Head>
        <title>definity music - Home</title>
        <meta
          name="description"
          content="definity music is a electronic music label and spotify playlist curator, who wants to relase the best music in the future."
        />

        <meta
          name="keywords"
          content="electronic music, dance music, edm music, deep house, slap house, house music, spotify playlist, music label, playlist curator"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Whitespace />
      <ResponsiveImage priority src={logo} alt="Logo" />
      <Whitespace />
      <Headline>Mission</Headline>
      <Text>
        definity - where <BoldText>definiteness</BoldText> and{" "}
        <BoldText>infinity</BoldText> melt together. The mission of definity is
        to make the best music available to as many people as possible.
        <br /> The handcrafted spotify playlists are the flagship and shows what
        definity music stands for.
      </Text>
      <Whitespace />
      <Headline>Spotify Playlists</Headline>
      <Grid maxItemSize="300px" gap={20}>
        {playlists?.map((playlist, index) => (
          <Link
            href={playlistUrls[index].url}
            key={"playlistimage-" + index}
            target="_blank"
          >
            <PlaylistImage
              src={playlist.thumbnail_url}
              alt={playlist.title}
              width={playlist.thumbnail_width}
              height={playlist.thumbnail_height}
            />
          </Link>
        ))}
      </Grid>
    </Container>
  );
}
