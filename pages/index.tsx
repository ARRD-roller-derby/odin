import Head from "next/head";
import Caroussel from "../lib/Caroussel/Caroussel";
import styles from "../styles/Home.module.css";
import odin from "../utils/odin";
import useIsMobile from "../utils/useIsMobile";

interface props {
  images: { mobile: Array<string>; desktop: Array<string> };
}

export default function Home({ images }: props) {
  const isMobile = useIsMobile();
  return (
    <div className={styles.container}>
      <Head>
        <title>Arrd | Association Rouen Roller Derby - Maromme</title>
        <meta name="description" content="Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.title}>
        <Caroussel images={isMobile ? images.mobile : images.desktop} />
      </div>

      <p>{process.env.NEXT_PUBLIC_URL_BUCKET}</p>
      <p>{process.env.NEXT_PUBLIC_URL_BUCKET}</p>
      <p>{process.env.NEXT_PUBLIC_URL_BUCKET}</p>
      <p>{process.env.NEXT_PUBLIC_URL_BUCKET}</p>
      <p>{process.env.NEXT_PUBLIC_URL_BUCKET}</p>
      <p>{process.env.NEXT_PUBLIC_URL_BUCKET}</p>
      <p>{process.env.NEXT_PUBLIC_URL_BUCKET}</p>
      <p>{process.env.NEXT_PUBLIC_URL_BUCKET}</p>
      <p>{process.env.NEXT_PUBLIC_URL_BUCKET}</p>
      <p>{process.env.NEXT_PUBLIC_URL_BUCKET}</p>
      <p>{process.env.NEXT_PUBLIC_URL_BUCKET}</p>
      <p>{process.env.NEXT_PUBLIC_URL_BUCKET}</p>
      <p>{process.env.NEXT_PUBLIC_URL_BUCKET}</p>
      <p>{process.env.NEXT_PUBLIC_URL_BUCKET}</p>
      <p>{process.env.NEXT_PUBLIC_URL_BUCKET}</p>
      <p>{process.env.NEXT_PUBLIC_URL_BUCKET}</p>
      <p>{process.env.NEXT_PUBLIC_URL_BUCKET}</p>
      <p>{process.env.NEXT_PUBLIC_URL_BUCKET}</p>
      <p>{process.env.NEXT_PUBLIC_URL_BUCKET}</p>
      <p>{process.env.NEXT_PUBLIC_URL_BUCKET}</p>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const baseUrl = `${process.env.NO_SSL ? "http" : "https"}://${
      req.headers.host
    }`,
    { data } = await odin.get(`${baseUrl}/api/carroussel`);

  return {
    props: {
      images: data,
    },
  };
}
