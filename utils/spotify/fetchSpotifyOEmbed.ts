export type SpotifyOEmbedResult = {
  html: string;
  width: number;
  height: number;
  version: string;
  provider_name: string;
  provider_url: string;
  type: string;
  title: string;
  thumbnail_url: string;
  thumbnail_width: number;
  thumbnail_height: number;
};

export const fetchSpotifyOEmbed = async (
  url: string
): Promise<SpotifyOEmbedResult | undefined> => {
  const response = await fetch("https://open.spotify.com/oembed?url=" + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json+oembed",
    },
  });

  return response.json();
};
