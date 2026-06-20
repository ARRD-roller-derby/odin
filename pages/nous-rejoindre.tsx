import { useEffect } from "react";
import LayoutPage from "../lib/LayoutPage/LayoutPage";
import classes from "../lib/LayoutPage/LayoutPage.module.css";
export default function NousRejoindre() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!/^https:\/\/([a-z0-9-]+\.)?helloasso\.com$/i.test(event.origin)) {
        return;
      }

      const data = event.data as { height?: number };
      if (!data?.height) {
        return;
      }

      const haWidget = document.getElementById("haWidget");
      if (haWidget instanceof HTMLIFrameElement) {
        haWidget.style.height = `${data.height}px`;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <LayoutPage
      title="Nous rejoindre"
      description="L’association recrute très volontiers de nouvelles personnes, à partir de 16 ans, pour grossir les rangs de l'équipe.
      Nous recrutons aussi des arbitres, avec ou sans patins."
    >
      <div className="container">
        <h2>Comment nous rejoindre ?</h2>
        <p>
          Nous recrutons joueur·ses, arbitres ou simples
          membres à partir de <span className="highl">16 ans</span>.
        </p>
        <ul>
          <li>
            Rendez-vous dès maintenant sur notre espace{" "}
            <a
              href="https://www.helloasso.com/associations/association-rouen-roller-derby-arrd"
              target="_blank"
            >
              HelloAsso
            </a>
          </li>
          <li>
            Après un essai, vous recevrez toutes les informations utiles et le
            dossier d&apos;inscription par mail{" "}
          </li>
          <li>
            Ou simplement, écrivez-nous :{" "}
            <a href="mailto: contact.arrd@gmail.com? subject=notre adresse mail">
              contact.arrd@gmail.com
            </a>
          </li>
        </ul>
        <p>
          Pas besoin d’être un·e star du patin pour nous rejoindre,{" "}
          <span className="highl">tous les niveaux sont les bienvenus</span> !
          La <span className="highl">derbyschool</span> du
          dimanche est là pour t&apos;apprendre toutes les bases.
        </p>
        <h2>Essayer sans s&apos;engager</h2>
        <div className={classes.containerIframe}>
          {/* <p>
          En septembre seulement, vous pouvez essayer gratuitement{" "}
          <span className="highl">2 entraînements</span> de roller derby /
          patin.
        </p>
        <p>
          <span className="highl">Essais cours de patin + derbyschool : </span>{" "}
          les dimanches 21 septembre et 5 octobre de 17h00 à 19h30. Au programme
          :
        </p>
        <p>
          <span className="highl">Essais Roller Derby Été 2026 : </span>{" "}
          les dimanches 5 juillet et 26 juillet de 16h30 à 19h30. Au programme
          :
        </p>
        <ul>
          <li>ℹ️ Présentation de l’association, échauffement sans patins</li>
          <li>🧦 Sock derby (initiation sans patin)</li>
          <li>🛼 Essai de patinage (accompagné·e)</li>
        </ul>
        <p style={{ textAlign: "center" }}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdzasI1TdubwlUVNjiWElNhJcll5C4n3b6C_fKMr14X-UOLlA/viewform?usp=header"
            target="_blank"
          >
            Je m’inscris aux essais
          </a>
        </p> */}
          <iframe
            id="haWidget"
            className={classes.iframe}
            src="https://www.helloasso.com/associations/association-rouen-roller-derby-arrd/evenements/essai-roller-derby-ete-2026-16-ans-et-plus/widget"
          ></iframe>
        </div>
        <h2>Combien ça coûte ?</h2>
        <ul>
          <li>
            Roller derby : <span className="highl">80€</span> pour la saison
            (septembre à juillet)
          </li>
          {/* <li>
            Cours de patin : <span className="highl">50€ le 1er trimestre</span>{" "}
            et 30€ les suivants
          </li> */}
          <li>
            Adhésion simple non pratiquant·e :{" "}
            <span className="highl">20€</span>
          </li>
        </ul>
        <h2>S&apos;équiper</h2>
        <p>
          C’est indispensable ! Pour pratiquer le roller derby, vous devez
          impérativement vous équiper de :
        </p>
        <ul>
          <li>casque</li>
          <li>protège-poignets</li>
          <li>protège-coudes</li>
          <li>protège-genoux</li>
          <li>protège-dents (non nécessaire pour les cours de patin)</li>
        </ul>
        <p>
          <span className="highl">
            On prête le matériel pour les essais et ensuite il est possible de
            louer patins et protections pour un semestre.
          </span>
        </p>
        <p>
          Si vous cherchez déjà à vous équiper, rendez-vous sur le shop{" "}
          <a href="https://shop.myrollerderby.com/fr/" target="_blank">
            MyRollerDerby
          </a>{" "}
          et n’hésitez pas à demander conseil à vos nouvelles coéquipièr·es !
        </p>
      </div>
    </LayoutPage>
  );
}
