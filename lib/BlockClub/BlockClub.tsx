import BlockIndex from "../BlockIndex/BlockIndex";
import classes from "./BlockClub.module.css";
import Link from "next/link";

export default function BlockClub() {
  return (
    <BlockIndex position="left">
      <div className={classes.container}>
        <div className={classes.containerText}>
          <h2>Le ARRD-Maromme, un club associatif</h2>
          <div className={classes.desc}>
            <p>
              Association de loi 1901 créée le 11 septembre 2014, le
              ARRD-Maromme rassemble ses membres autour de la pratique du roller
              derby et du patin à roulettes.
            </p>
            <p>
              C&apos;est à <span className="highl">Maromme</span> que notre{" "}
              <span className="highl">équipe mixte</span> s&apos;investit pour
              pratiquer un sport qui nous passionne alliant{" "}
              <span className="highl">plaisir et compétition</span>.
            </p>
          </div>
          <div className={classes.img}></div>
          <div className={classes.buttons}>
            <Link href="/association">
              <span className="button">Le club en détails</span>
            </Link>
          </div>
        </div>
        <div className="containerImg">
          <div className="img">
            <img
              src="/club.webp"
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
