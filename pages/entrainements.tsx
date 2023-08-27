import LayoutPage from "../lib/LayoutPage/LayoutPage";
import classes from "./../styles/Page.module.css";
import dynamic from "next/dynamic";

export default function Entrainements() {
  const MapWithNoSSR = dynamic(
    () => import("../lib/TrainingsMap/TrainingsMap"),
    {
      ssr: false,
    }
  );
  return (
    <LayoutPage
      title="Les entraînements"
      description="Consultez les informations liées à nos sessions d'entraînement"
      img="/training.webp"
    >
      <section className={classes.container}>
          <article>
          <h2>Roller derby</h2>
        <h3 className={classes.subtitle}>Mercredi - 20h00 / 22h00</h3>
        <h4 className={classes.details}>Entraînement tous niveaux</h4>
        <div className={classes.address}>
          <p>Stade Paul VAUQUELIN</p>
          <p>Salle LESUEUR</p>
          <p>Rue Ernest Danet</p>
          <p>76 150 MAROMME</p>
          <p>{`(`}première salle sur la gauche{`)`}</p>
        </div>
          </article>
          <article>
        <h3 className={classes.subtitle}>Dimanche - 17h00 / 19h30</h3>
        <h4 className={classes.details}>Entraînement tous niveaux</h4>
        <div className={classes.address}>
          <p>Gymnase Jesse OWENS</p>
          <p>Parc de SIGNA</p>
          <p>Route de Duclair</p>
          <p>76 150 MAROMME</p>
          <p>{`(`}accès à l{`'`}angle des rues Denis Papin et Jacquard{`)`}</p>

        </div>
          </article>
          <article>
          <h2>Cours de patin</h2>
        <h3 className={classes.subtitle}>Vendredi - 19h30 / 21h30</h3>
        <h4 className={classes.details}>Apprentissage du patinage</h4>
        <div className={classes.address}>
          <p>Gymnase Jesse OWENS</p>
          <p>Parc de Signa</p>
          <p>Route de Duclair</p>
          <p>76 150 MAROMME</p>
          <p>{`(`}accès à l{`'`}angle des rues Denis Papin et Jacquard{`)`}</p>
        </div>
          </article>

        <div className={classes.map}>
          <MapWithNoSSR />
        </div>
      </section>

    </LayoutPage>
  );
}
