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
          <h2>Collecte</h2>
          <div className={classes.desc}>
            {/* <p>
              Le roller derby est un{" "}
              <span className="highl">
                sport d’équipe, de contact et de vitesse
              </span>{" "}
              qui se pratique sur rollers quads.
            </p> */}
            <p>
              Notre équipe se déplace à Mérignac (Bordeaux) pour la 2ème étape
              du championnat nationale 1 open (mixte). Nos joueur·ses et
              arbitres ont besoin de votre aide pour réaliser ce long voyage
              depuis la Normandie dans les meilleurs conditions (un bon matelas
              et un petit dej des champions, de vendredi soir à lundi matin, ça
              fait des frais).
            </p>
            <p>
              En nous apportant ton soutien, tu peux en plus déduire ton don de
              tes impôts sur le revenu ! Et tu remportes notre reconnaissance
              éternelle. On pensera bien fort à toi sur le track. Merci de nous
              soutenir !
            </p>
          </div>
        </div>
        <div className="containerImg">
          <div className="img">
            <iframe
              id="haWidget"
              allowTransparency={true}
              className={classes.iframe}
              src="https://www.helloasso.com/associations/association-rouen-roller-derby-arrd/collectes/championnat-n1-open-etape-2/widget-vignette"
              title="Widget HelloAsso"
            ></iframe>
          </div>
        </div>
      </div>
    </BlockIndex>
  );
}
