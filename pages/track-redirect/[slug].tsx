import {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { event, ga } from "react-ga";
import { playlistUrls } from "../../playlistUrls";
import { slugify } from "../../utils/helpers/slugify";

type Props = { slug: string; url: string };

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  return {
    paths: playlistUrls.map((playlist) => ({
      params: { slug: slugify(playlist.name) },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const url = playlistUrls.find(
    (playlist) => params?.slug === slugify(playlist.name)
  )?.url;

  return {
    // Passed to the page component as props
    props: { slug: params?.slug, url },
  };
}

export default function TrackRedirect({ slug, url }: Props) {
  const router = useRouter();

  useEffect(() => {
    event({
      category: "Conversion",
      action: "Spotify Redirect",
      label: slug,
      value: 1,
    });
    router.push(url);
  }, []);
}
