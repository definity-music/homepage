import Head from "next/head";
import { Container, Headline, Text } from "../../components/Utils";

export default function Imprint({}) {
  return (
    <Container>
      <Head>
        <title>definity music - Imprint</title>
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
      <Headline>Imprint</Headline>
      <Text>Service provider according to §5 TMG</Text>
      <Text>
        Jonathan Wagner
        <br />
        Perthesstraße 1D
        <br />
        04317 Leipzig
        <br />
      </Text>
      <Text>
        Accountability for content: The contents of our pages have been created
        with the utmost care. However, we cannot guarantee the contents
        accuracy, completeness or topicality. According to statutory provisions,
        we are furthermore responsible for our own content on these web pages.
        In this context, please note that we are accordingly not obliged to
        monitor merely the transmitted or saved information of third parties, or
        investigate circumstances pointing to illegal activity. Our obligations
        to remove or block the use of information under generally applicable
        laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act
        (TMG).
      </Text>
      <Text>
        Accountability for links: Responsibility for the content of external
        links (to web pages of third parties) lies solely with the operators of
        the linked pages. No violations were evident to us at the time of
        linking. Should any legal infringement become known to us, we will
        remove the respective link immediately.
      </Text>
      <Text>
        Copyright: Our web pages and their contents are subject to German
        copyright law. Unless expressly permitted by law (§ 44a et seq. of the
        copyright law), every form of utilizing, reproducing or processing works
        subject to copyright protection on our web pages requires the prior
        consent of the respective owner of the rights. Individual reproductions
        of a work are allowed only for private use, so must not serve either
        directly or indirectly for earnings. Unauthorized utilization of
        copyrighted works is punishable (§ 106 of the copyright law).
      </Text>
      <Headline level={2}>Contact</Headline>
      <Text>E-Mail: info@definitymusic.com</Text>
      <Text>
        This imprint also applies to the following social media presences and
        online profiles: instagram.com/definitymusic
      </Text>
    </Container>
  );
}
