import LayoutPage from "../lib/LayoutPage/LayoutPage";

export default function nousRejoindre() {
  return (
    <LayoutPage
      title="Nous rejoindre"
      description="L’association recrute très volontiers de nouvelles personnes, à partir de 16 ans, pour grossir les rangs de ses équipes féminines et masculines.
      Nous recrutons aussi des NSO ou arbitres."
    >
      <div className="container">
        <h2>Comment nous rejoindre ?</h2>
        <p>
          L’association recrute très volontiers de nouvelles personnes, à partir
          de <span className="highl">16 ans</span>, pour grossir les rangs de
          son <span className="highl">équipe mixte</span>.
        </p>
        <p>Nous recrutons aussi des gens pour arbitrer.</p>
        <p>Si ce sport t’intéresse, n’hésite surtout pas à nous rejoindre !</p>
        <p>
          Nous accueillons les nouvelles recrues{" "}
          <span className="highl">deux fois dans l’année:</span>
        </p>
        <ul>
          <li>En septembre</li>
          <li>En janvier / février</li>
        </ul>
        <p>
        Venez découvrir le <span className="highl"> Roller Derby </span>lors des<span className="highl"> stages d’été</span> les dimanches 21 et 28 juillet de 16h30 à 19h30.
        </p>
        <p>
          Au programme:
        </p>
        <ul>
          <li>ℹ️ Présentation du roller derby et de l’association ARRD-Maromme</li>
          <li>🧦 Sock derby (initiation sans patin)</li>
          <li>🛼 Essai de patinage (accompagné·e)</li>
          <li>🔥 Essai Roller Derby</li>
        </ul>
        <p style={{textAlign:'center'}}>
          <a href="https://forms.gle/2sphHKdP1GNWo6p17" target = '_blank' >
            Je m’inscris aux stages d’été</a>
        </p>
        <h2>Quel niveau est attendu ?</h2>
        <p>
          Pas besoin d’être un.e as du patin pour nous rejoindre,{" "}
          <span className="highl">tous les niveaux sont les bienvenus</span>.
        </p>
        <p>
          Les <span className="highl"> cours de patin</span> du vendredi sont là pour ça.
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
          <span className="highl">(on prête le matériel)</span> … Et de voir si
          vous vous sentez bien en notre compagnie (c’est important pour un
          sport d’équipe !).
        </p>
        <p className="highl">
          Pour connaître les dates des sessions de découverte, rendez-vous sur
          notre page Facebook dans la section “Actualités” du site.
        </p>
        <h2>Profitez de 3 entraînements d’essai gratuits</h2>
        <p>
          En septembre seulement, vous pouvez “tester” le roller derby
          gratuitement, lors de <span className="highl">3 entraînements</span>.
        </p>
        <p>Vous pourrez ensuite décider de vous inscrire … ou non ! ;-)</p>
        <h2>Inscrivez-vous</h2>
        <p>
          Sur prise de contact à <a href = "mailto: contact.arrd@gmail.com? subject=notre adresse mail">contact.arrd@gmail.com</a>
           , nous vous fournissons le dossier d’inscription à l’asso.
        </p>
        <p>
          Un certificat médical autorisant la pratique du roller derby en
          compétition vous sera demandé.
        </p>
        <p>
          Le montant de l’adhésion est de{" "}
          <span className="highl">80 € tout inclus</span> pour le derby.
        </p>
        <p>Et de <span className="highl"> 50€ par trimestre</span> pour les cours de patin.</p>
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
          Et puis n’hésitez pas à demander conseil à vos nouveaux / nouvelles
          coéquipièr.e.s !
        </p>
      </div>
    </LayoutPage>
  );
}
