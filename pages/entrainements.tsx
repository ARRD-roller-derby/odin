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
      description="Consultez les informations liées à nos sessions d'entraînements"
      img="/training.webp"
    >
      <section className={classes.container}>
          <article>
          <h2>Tous niveaux</h2>
        <h3 className={classes.subtitle}>Vendredi - 19h30 / 22h00</h3>
        <h4 className={classes.details}>Pratique du derby</h4>
          </article>
          <article>
        <h3 className={classes.subtitle}>Dimanche - 17h00 / 19h30</h3>
        <h4 className={classes.details}>Technique de patinage</h4>
        <div className={classes.address}>
          <p>
            Gymnase <span className="trash">Jesse OWENS</span>
          </p>
          <p>Parc de SIGNA</p>
          <p>Route de Duclair</p>
          <p>accès à l{`'`}angle de la rue Denis Papin et rue Jacquard</p>
          <p>
            76 153 <span className="trash">MAROMME</span>
          </p>
        </div>
          </article>
          <article>
          <h2>Confirmé.e.s</h2>
        <h3 className={classes.subtitle}>Mercredi - 19h45 / 21h45</h3>
        <h4 className={classes.details}>Pratique du derby</h4>
        <div className={classes.address}>
          <p>
          Stade Paul VAUQUELIN <span className="trash">Salle LESUEUR</span>
          </p>
          <p>Rue Ernest DANET</p>
          <p>première salle sur la gauche</p>
          <p>
            76 150 <span className="trash">MAROMME</span>
          </p>
        </div>
          </article>

        <div className={classes.map}>
          <MapWithNoSSR />
        </div>
      </section>

    </LayoutPage>
  );
}
