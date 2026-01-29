import Head from 'next/head'
import classes from './LayoutPage.module.css'
import { ReactChild } from 'react'
import Footer from '../Footer/Footer'
import Menu from '../Menu/Menu'
import { useRouter } from 'next/dist/client/router'
import Script from 'next/script'

interface layoutInterface {
  children: ReactChild
  title: string
  description: string
  img?: string
}

export default function LayoutPage({
  children,
  title,
  description,
  img: img_,
}: layoutInterface) {
  const { asPath } = useRouter(),
    url = `https://arrd.fr${asPath}`

  const imgDefault = '/fb.jpg',
    descriptionDefault =
      "L'Association Rouen Roller Derby (ARRD) est une association de loi 1901 née en septembre 2014 en métropole rouennaise, dans le but de pratiquer un sport qui nous passionne alliant plaisir et compétition, pour les femmes et également les hommes."
  const img = img_ || imgDefault
  return (
    <section
      className={classes.container}
      style={{
        backgroundImage: img,
      }}
    >
      <Head>
        <title>{title} | Association Rouen Roller Derby - Maromme</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content={img} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content={description || descriptionDefault} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:site" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={img} />
        <meta name="twitter:url" content={url} />
      </Head>
      <header className={classes.header}>
        <h1 className={classes.title}>{title}</h1>
        <Menu fixed />
      </header>
      <main className={classes.main}>
        <article className={classes.article}>{children}</article>
      </main>
      <footer>
        <Footer />
        <Script id="Glyph">
          {`window.GLYPH_WEBSITE_ID='f10d7ce0-7f7b-4143-9c33-792c2b1fba92';(function(){d=document;s=d.createElement("script"); s.src="https://widget.glyph.chat/g.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}
        </Script>
      </footer>
    </section>
  )
}
