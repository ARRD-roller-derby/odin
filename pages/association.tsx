import LayoutPage from "../lib/LayoutPage/LayoutPage";

const content = `<h2>Histoire et état d’esprit</h2>
<p>
  <span class="highl">Les valeurs du roller derby et du ARRD-Maromme :</span></p>
<p>Inclusivité, esprit d’équipe, fair play, entraide et solidarité, c'est l'ADN du derby !</p>
<p>
<p>
  Association de loi 1901 créée le 11 septembre 2014, le ARRD-Maromme rassemble ses membres autour de la pratique du Roller Derby et du patin à roulettes.
           </p>
           <p>  
  C'est à <span class="highl">Maromme</span> que notre <span class="highl">équipe mixte</span> s'investit pour pratiquer un sport qui nous passionne alliant <span class="highl">plaisir et compétition</span>.
</p>
<p>L’équipe sportive et le ARRD-Maromme sont <span class="highl">gérés par les membres de l’équipe</span>. Cette association est l’œuvre des adhérent·es, pour les adhérent·es.
Notre comité directeur est exclusivement féminin pour garantir une gouvernance en accord avec les <span class="highl">valeurs féministes</span> du roller derby.
</p>
<p>
Depuis 2014, <span class="highl">le ARRD-Maromme évolue en loisir</span> (= pas en championnat) tout en gardant l’esprit compétitif.
</p>
<p>Nous voulons pratiquer le roller derby et le patin, travailler et progresser pour faire des matchs : le plaisir de jouer et d’être ensemble avant tout.
</p>
<p><span class="highl">Nos objectifs sont simples :</span></p>
<p>
  Continuer à vivre notre passion et la transmettre dans la bonne
  humeur, faire découvrir notre sport et notre philosophie au plus grand nombre.
</p>
<p>
  Le roller derby est un sport 
  <span class="highl">inclusif, LGBTQIA friendly</span>, qui porte
  des valeurs fondamentales à nos yeux : respect, communication,
  travail, équilibre et solidarité.
</p>
<p>
  Alors suivez l'actualité du ARRD-Maromme et venez vivre l'expérience sur le track !</p>`;

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
