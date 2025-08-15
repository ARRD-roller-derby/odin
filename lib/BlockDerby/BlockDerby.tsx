import BlockIndex from "../BlockIndex/BlockIndex";
import classes from "./BlockDerby.module.css";
import Link from "next/link";

export default function BlockDerby() {
  return (
    <BlockIndex position="right">
      <div className={classes.container}>
        <div className={classes.txt}>
          <h2>C&apos;est quoi le roller derby ?</h2>
          <div className={classes.desc}>
            <p>
              Le roller derby est un{" "}
              <span className="highl">
                sport d’équipe, de contact et de vitesse
              </span>{" "}
              qui se pratique sur rollers quads.
            </p>
            <p>
              2 équipes s’affrontent sur une piste ovale. À chaque jam (phase de
              jeu de 2mn maximum), 5 joueur·ses de chaque équipe se succèdent
              sur le track : un·e attaquant·e (jammeur·se), qui porte une étoile
              sur son casque et 4 bloqueur·ses.
            </p>
            <p>
              Lae <span className="highl">jammeur·se</span> a pour rôle de faire
              le plus de tours de pistes possible pour marquer des points et les{" "}
              <span className="highl">bloqueur·ses</span> doivent l’en empêcher.
            </p>
            <p>
              À l’issue de 2 périodes de 30mn,{" "}
              <span className="highl">
                l’équipe qui a le plus de points gagne le match
              </span>{" "}
              (1 point par bloqueur·se adverse dépassé·e).
            </p>
          </div>
          <div className={classes.buttons}>
            <Link href="/roller-derby">
              <span className="button">Je veux tout savoir !</span>
            </Link>
          </div>
        </div>
        <div className="containerImg">
          <div className="img">
            <img
              src={`${process.env.NEXT_PUBLIC_URL_BUCKET}pictures/rd_explain.webp`}
              width="800"
              height="894"
              alt="roller derby"
            />
          </div>
        </div>
      </div>
    </BlockIndex>
  );
}
