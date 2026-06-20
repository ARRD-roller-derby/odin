import { useEffect } from "react";
import BlockIndex from "../BlockIndex/BlockIndex";
import classes from "./BlockForm.module.css";

export default function BlockForm() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data as { height?: number };
      if (!data?.height) {
        return;
      }

      const haWidgetElement = document.getElementById("haWidget");
      if (haWidgetElement instanceof HTMLIFrameElement) {
        haWidgetElement.height = `${data.height}px`;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <BlockIndex position="left">
      <div className={classes.container}>
        <div className={classes.txt}>
          <h2>Essais Roller Derby Été 2026</h2>
          <div className={classes.desc}>
            <p>
              Venez découvrir notre merveilleuse discipline qu&apos;est le roller
              derby ! (gratuit)
            </p>
            <p>
              <span className="highl">Dimanche 5 et/ou 26 juillet de 16h30 à 19h30.</span>
            </p>
            <p>Au programme :</p>
            <p>- Un échauffement commun tous niveaux confondus</p>
            <p>- Patinage et réalisation d&apos;exercices simples</p>
            <p>
              - Un mini-point d&apos;apprentissage des règles du roller derby avec
              mise en situation (sans patins)
            </p>
            <p>
              - En fin de session un petit moment d&apos;échange pendant lequel vous
              pourrez poser toutes vos questions.
            </p>
          </div>
        </div>
        <div className="containerImg">
          <div className="img">
            <iframe
              id="haWidget"
              allowTransparency={true}
              className={classes.iframe}
              src="https://www.helloasso.com/associations/association-rouen-roller-derby-arrd/evenements/essai-roller-derby-ete-2026-16-ans-et-plus/widget-vignette"
              title="Widget HelloAsso"
            ></iframe>
          </div>
        </div>
      </div>
    </BlockIndex>
  );
}
