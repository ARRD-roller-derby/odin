import Head from 'next/head'
import Caroussel from '../lib/Caroussel/Caroussel'
import styles from '../styles/Home.module.css'
import BlockDerby from '../lib/BlockDerby/BlockDerby'
import BlockClub from '../lib/BlockClub/BlockClub'
import BlockForm from '../lib/BlockForm/BlockForm'
import Footer from '../lib/Footer/Footer'
import BlockTraining from '../lib/BlockTraining/BlockTraining'
import JoinButton from '../lib/JoinButton/JoinButton'
import Script from 'next/script'

export default function Home() {
  const
    title = 'Arrd | Association Rouen Roller Derby - Maromme',
    url = 'https://arrd.fr',
    img = '/fb.jpg',
    description =
      "L'Association Rouen Roller Derby (ARRD) est une association de loi 1901 née en septembre 2014 en métropole rouennaise, dans le but de pratiquer un sport qui nous passionne alliant plaisir et compétition, pour les femmes et également les hommes."

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content={url + img} />
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
        <meta name="twitter:image" content={url + img} />
        <meta name="twitter:url" content={url} />
      </Head>
      <div className={styles.title}>
        <Caroussel />
      </div>
      <div className={styles.blocks}>
        <BlockForm />
        <BlockDerby />
        <BlockClub />
        <BlockTraining />
        <JoinButton />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      <Script id="Glyph">
        {`window.GLYPH_WEBSITE_ID='f10d7ce0-7f7b-4143-9c33-792c2b1fba92';(function(){d=document;s=d.createElement("script"); s.src="https://widget.glyph.chat/g.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}
      </Script>
    </div>
  )
}
