import { GetStaticPathsResult, GetStaticPropsContext } from "next";

import { useRouter } from "next/router";
import { useEffect } from "react";
import GA from "react-ga4";
import { useConsentContext } from "../../contexts/ConsentContext";
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
  const { initializedGA, initGA } = useConsentContext();

  useEffect(() => {
    if (!initializedGA) {
      initGA();
      console.info("initGA");
    }
    console.info("track event");
    GA.event({
      category: "Conversion",
      action: "Spotify Redirect",
      label: slug,
      value: 1,
    });

    console.info("redirect to" + url);
    router.push(url);
  }, [initializedGA]);
}
