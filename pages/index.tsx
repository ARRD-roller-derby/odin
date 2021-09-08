import Head from "next/head";
import Image from "next/image";
import Caroussel from "../lib/Caroussel/Caroussel";
import styles from "../styles/Home.module.css";
import odin from "../utils/odin";

export default function Home({ images }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arrd | Association Rouen Roller Derby - Maromme</title>
        <meta name="description" content="Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.title}>
        <Caroussel images={images} />
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
  }`;

  const { data } = await odin.get(`${baseUrl}/api/hello`);

  return {
    props: {
      images: data,
    },
  };
}
