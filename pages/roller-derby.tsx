import LayoutPage from "../lib/LayoutPage/LayoutPage";


export default function RollerDerby() {
  return (
    <LayoutPage
      title="Le Roller Derby"
      description="Né d’une idée germée aux Etats-Unis au début des années 30, le Roller Derby est un sport à part entière depuis 1937."
    >
      <div className="container">
        <h2>Un peu d’histoire</h2>
        <p>
        Né d’une idée germée aux Etats-Unis au début des <span className="highl">années 30</span>, le Roller Derby est un sport à part 
        entière depuis <span className="highl">1937</span>.
        </p>
        <p>
        Dans les <span className="highl">années 60</span>, des promoteurs reprennent l’idée pour en faire un 
        produit <span className="highl">spectacle</span>, chorégraphié et organisé ; le Roller Derby connaît une phase d’oubli jusqu’en 
        2000 au <span className="highl">Texas</span> où il revient sur le devant de la scène, plus cadré, plus sérieux, mené par les 
        joueuses elles-mêmes.
        </p>
        <p>En décembre 2010, la Fédération internationale de roller sports, une filiale du Comité international olympique, reconnait le 
          roller derby comme un sport légitime.</p>
      <h2>Un sport cadré qui mobilise du monde </h2>
      <p><span className="highl">Pas moins de 20 arbitres</span> (7 sur roulettes et 13 NSO, non skating offical) sont là pour s’assurer 
      du respect des règles et distribuer des pénalités aux joueuses dans le cas contraire.</p>
      <p>Car malgré l’engagement et l’énergie que les joueuses mettent à l’ouvrage, le Roller Derby c’est bigrement musclé, les chutes 
        sont fréquentes, <span className="highl">mais ce n’est pas du catch</span>.</p>
      <p>Les contacts effectués avec les épaules, les hanches et les fesses sont autorisés, mais les coups de coude, croche-pieds ou 
        charges dans le dos sont en revanche strictement interdits.</p>
      <p>Les règles du Roller Derby sont d’ailleurs, depuis juillet 2014, mises à disposition par la <span className="highl">WFTDA</span> 
      (Women Flat Track Derby Association) dans leur traduction Française officielle. Une raison de plus de bien comprendre toutes les 
      nuances de ce jeu passionnant ! Régulièrement mises à jour, vous trouverez ici la dernière version officielle en date.</p>
      <p><a href="https://static.wftda.com/rules/wftda-rules-french.pdf" target='_blank'>Consulter les Règles du Roller Derby 2021 en 
      VF</a></p>
      </div>
    </LayoutPage>
  );
}