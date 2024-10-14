import LayoutPage from "../lib/LayoutPage/LayoutPage";

const content = `<h2>Histoire et état d’esprit</h2>
<p>
  L'Association Rouen Roller Derby ARRD Maromme est une 
  <span class="highl">association</span> de loi 1901 née en
  septembre 2014 en métropole rouennaise et plus spécifiquement à 
  <span class="highl">Maromme</span>, dans le but de pratiquer un
  sport qui nous passionne alliant plaisir et compétition, pour les
  femmes et également les hommes.
</p>
<p>
  Esprit d’équipe, fair play, entraide et solidarité, pour maintenir un
  esprit compétitif sain : les fondements du derby !
</p>
<p>
  Notre équipe souhaite participer au rayonnement de ce sport, devenu
  enfin officiel auprès de la <span class="highl">FFRS</span> 
  (Fédération Française de Roller Sports) en 2014, en y apportant la
  rigueur, le niveau athlétique, la progression constante qu'il demande.
</p>
<p>Nos objectifs sont simples :</p>
<p>
  Continuer à vivre notre passion et la transmettre dans la bonne
  humeur, faire découvrir notre sport qui suscite un intérêt croissant
  et qui compte à ce jour plus de 4500 licenciés 
  <span class="highl">FFRS</span> répartis dans une centaine de
  clubs en France.
</p>
<p>
  Le roller derby est un sport 
  <span class="highl">inclusif, LGBTQIA friendly</span>, qui porte
  des valeurs fondamentales à nos yeux : respect, communication,
  travail, équilibre et solidarité.
</p>
<p>
  Alors accrochez vous et suivez l'actualité du
  <span class="highl">ARRD</span> !
</p>
<p>Venez vivre l'expérience sur le track !</p>`;

export default function Association() {
  return (
    <LayoutPage
      title="L'association"
      description="L'Association Rouen Roller Derby (ARRD) Maromme est une association de loi 1901 née en septembre 2014 en métropole rouennaise et plus spécifiquement à Maromme, dans le but de pratiquer un sport qui nous passionne alliant plaisir et compétition, pour les femmes et également les hommes"
    >
      <div
        className="container"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </LayoutPage>
  );
}
