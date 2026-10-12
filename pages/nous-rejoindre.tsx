import LayoutPage from "../lib/LayoutPage/LayoutPage";
import classes from "../lib/LayoutPage/LayoutPage.module.css";
export default function NousRejoindre() {
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
        {/* <h2>Essayer sans s&apos;engager</h2>
        <div className={classes.containerIframe}>
          <iframe
            id="haWidget"
            className={classes.iframe}
            src="https://www.helloasso.com/associations/association-rouen-roller-derby-arrd/evenements/essai-roller-derby-2026-2027/widget"
            scrolling="no"
          ></iframe>
        </div> */}
        <h2>Combien ça coûte ?</h2>
        <ul>
          <li>
            Roller derby : <span className="highl">85€</span> pour la saison
            (septembre à juillet)
          </li>
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
