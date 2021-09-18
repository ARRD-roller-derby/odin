import Head from "next/head";
import classes from "./LayoutPage.module.css";
import { ReactChild } from "react";
import Footer from "../Footer/Footer";
import Menu from '../Menu/Menu';
import { useRouter } from "next/dist/client/router";

interface layoutInterface {
  children: ReactChild;
  title: string;
  description: string;
  img: string;
}

export default function LayoutPage({
  children,
  title,
  description,
  img,
}: layoutInterface) {
    const {asPath} = useRouter(),
    url = `https://arrd.fr${asPath}`;
  return (
    <section className={classes.container}       style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_URL_BUCKET}/pictures${img})` }}>
      <Head>
        <title>{title} | Association Rouen Roller Derby - Maromme</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content={img} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:site" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={img} />
        <meta name="twitter:url" content={url} />
      </Head>
      <header
        className={classes.header}
  
      >
        <h1 className={classes.title}>{title}</h1>
        <Menu fixed/>
      </header>
      <main className={classes.main}>

          <article className={classes.article}>
          {children}
          </article>
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}
