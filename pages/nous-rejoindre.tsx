import LayoutPage from "../lib/LayoutPage/LayoutPage";

export default function nousRejoindre() {
  return (
    <LayoutPage
      title="Nous rejoindre"
      description="L’association recrute très volontiers de nouvelles personnes, à partir de 16 ans, pour grossir les rangs de ses équipes féminines et masculines.
      Nous recrutons aussi des NSO ou arbitres."
      img="/join.webp"
    >
      <div className="container">
        <h2>Comment nous rejoindre ?</h2>
        <p>
          L’association recrute très volontiers de nouvelles personnes, à partir
          de <span className="trash">16 ans</span>, pour grossir les rangs de
          ses équipes <span className="trash">féminines et masculines</span>.
        </p>
        <p>Nous recrutons aussi des NSO ou arbitres.</p>
        <p>Si ce sport t’intéresse, n’hésite surtout pas à nous rejoindre !</p>
        <p>
          Nous accueillons les nouvelles recrues{" "}
          <span className="trash">deux fois dans l’année</span> :
        </p>
        <ul>
          <li>En septembre</li>
          <li>Courant février / mars</li>
        </ul>
        <p>
          Pendant tout le mois de septembre, nos entraînements sont ouverts à
          celles et ceux qui voudraient essayer en vue de s’inscrire.
        </p>
        <h2>Quel niveau est attendu ?</h2>
        <p>
          Pas besoin d’être un.e as du patin pour nous rejoindre,{" "}
          <span className="trash">tous les niveaux sont les bienvenus</span>.
        </p>
        <p>
          Néanmoins, il est préférable de tenir à peu près debout sur des
          roulettes OU, a minima, de ne pas avoir trop “peur” de vous lancer ;-)
        </p>
        <h2>Quel est le processus de recrutement ?</h2>
        <p>Venir à notre rencontre lors d’une session de découverte.</p>
        <p>
          Nous organisons des sessions de découverte durant l’été et tout début
          septembre.
        </p>
        <p>
          Ces moments ouverts à tous sur inscription sont l’occasion de
          découvrir les bases du roller derby, de chausser des patins{" "}
          <span className="trash">(on prête le matériel)</span> … Et de voir si
          vous vous sentez bien en notre compagnie (c’est important pour un
          sport d’équipe !).
        </p>
        <p className="trash">
          Pour connaître les dates des sessions de découverte, rendez-vous sur
          notre page Facebook ou dans la section “Actualités” du site.
        </p>
        <h2>Profitez de 3 entraînements d’essai gratuits</h2>
        <p>
          En septembre seulement, vous pouvez “tester” le roller derby
          gratuitement, lors de <span className="trash">3 entraînements</span>.
        </p>
        <p>Vous pourrez ensuite décider de vous inscrire … ou non ! ;-)</p>
        <h2>Inscrivez-vous</h2>
        <p>
          Sur prise de contact, nous vous fournissons le dossier d’inscription à
          l’asso.
        </p>
        <p>
          Un certificat médical autorisant la pratique du roller derby en
          compétition vous sera demandé.
        </p>
        <p>
          Le montant de l’adhésion est de{" "}
          <span className="trash">80 € tout inclus</span>.
        </p>
        <h2>Equipez-vous !</h2>
        <p>C’est un aspect important de ce sport !</p>
        <p>
          Pour pratiquer le roller derby, vous devez impérativement vous équiper
          de :
        </p>
        <ul>
          <li>casque</li>
          <li>protège-poignets</li>
          <li>protège-coudes</li>
          <li>protège-genoux</li>
          <li>protège-dents</li>
        </ul>
        <p>
          Pour cela, direction{" "}
          <a href="https://www.makadamshop.fr/" target="_blank" rel="noreferrer">
            Makadam Shop
          </a>
          , la référence à Rouen.
        </p>
        <p>
          Et puis n’hésitez pas à demander conseil à vos nouveaux / nouvelles
          coéquipièr.e.s !
        </p>
      </div>
    </LayoutPage>
  );
}
