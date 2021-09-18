import BlockIndex from "../BlockIndex/BlockIndex";
import classes from "./BlockClub.module.css";
import Link from "next/link";
import Image from "next/image";

export default function BlockClub() {
  return (
    <BlockIndex position="left">
      <div className={classes.container}>
      <div className={classes.containerText}>
        <h2>
          Le <span className="trash title">ARRD</span>, un club associatif
        </h2>
        <div className={classes.desc}>
          <p>
            L{`'`}Association Rouen Roller Derby (ARRD) Maromme est une association
            de loi 1901 née en septembre 2014 en métropole rouennaise et plus
            spécifiquement à <span className="trash">Maromme</span>, dans le but
            de pratiquer un sport qui nous passionne alliant{" "}
            <span className="trash">plaisir et compétition</span>, pour les
            femmes et également les hommes.
          </p>
        </div>
        <div className={classes.img}></div>
        <div className={classes.buttons}>
        <Link href="/le-roller-derby">
          <a className="button">Le club en détail</a>
        </Link>
        </div>
        </div>
        <div className="containerImg">
          <div className="img">
            <Image
              src={`${process.env.NEXT_PUBLIC_URL_BUCKET}pictures/club.webp`}
              width="1192"
              height="672"
              alt="roller derby"
            />
          </div>
        </div>
      </div>
    </BlockIndex>
  );
}
