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
          Le Roller Derby est un sport qui a vu le jour dans les années 20 aux
          Etats-Unis et a depuis connu de nombreuses transformations. Au début,
          il s’agissait de courses d’endurance sur piste. Dans les{" "}
          <span className="highl">années 60</span>, des promoteurs reprennent
          l’idée pour en faire un produit{" "}
          <span className="highl">spectacle</span>, chorégraphié et organisé,
          puis il disparaît pratiquement dans les années 1970.
        </p>
        <p>
          Le Roller Derby connaît une phase d’oubli jusqu’en 2000 au{" "}
          <span className="highl">Texas</span> où il revient sur le devant de la
          scène, plus cadré, plus sérieux, mené par les joueuses elles-mêmes :
          la 1ère ligue moderne de Roller Derby est née.
        </p>
        <p>
          En 2004, la{" "}
          <span className="highl">
            Women’s Flat Track Derby Association (WFTDA)
          </span>{" "}
          est créée afin d’unifier les règles du jeu et permettre aux ligues de
          se rencontrer. Le Roller Derby s’exporte enfin dans le monde et c’est
          en 2009 que les premières ligues françaises se développent.
        </p>
        <p>
          En décembre 2010, la Fédération Internationale de Roller Sports
          (FIRS), une filiale du Comité International Olympique, reconnait le
          roller derby comme un sport légitime mais ne se réfère pas aux règles
          WFTDA. De nos jours, 99% des équipes de roller derby jouent selon les
          règles de la WFTDA.
        </p>
        <h2>À quoi ressemble le derby 2.0 ?</h2>
        <p>
          {" "}
          Le roller derby est un{" "}
          <span className="highl">
            sport d’équipe, de contact et de vitesse
          </span>{" "}
          qui se pratique sur rollers quads. Les joueur·ses portent des
          protections : casque, coudes, genoux, poignets, casque et
          protège-dents.
        </p>
        <p>
          {" "}
          2 équipes s’affrontent sur une piste ovale. À chaque jam (phase de jeu
          de 2mn maximum), 5 joueur·ses de chaque équipe se succèdent sur le
          track : un·e attaquant·e (jammeur·se), qui porte une étoile sur son
          casque et 4 bloqueur·ses.
        </p>
        <p>
          {" "}
          Lae <span className="highl">jammeur·se</span> a pour rôle de faire le
          plus de tours de pistes possible pour marquer des points et les{" "}
          <span className="highl">bloqueur·ses</span> doivent l’en empêcher.
        </p>
        <p>
          À l’issue de deux périodes de 30mn, l’équipe qui a le plus de points
          gagne le match (1 point par bloqueur·se adverse dépassé·e).
        </p>
        <p> Pour cela, les contacts sont autorisés mais réglementés !</p>
        <h2>Arbitrage et règles </h2>
        <p>
          Il nous faut pas moins de{" "}
          <span className="highl">20 arbitres (referees)</span> pour assurer un
          match : 7 Skating Officials (SO) et 13 Non Skating Officals (NSO).
          Iels sont là pour s’assurer du respect des règles, garantir la
          sécurité de tous·tes, distribuer des pénalités aux joueuses dans le
          cas contraire, compter les points, chronométrer les temps de jeu ou de
          pénalité... Les fonctions sont nombreuses et variées.
        </p>
        <p>
          <span className="highl">
            Être ref au derby, c&apos;est aussi une passion !
          </span>
        </p>
        <p>
          Le derby c’est musclé et rapide, les chutes sont fréquentes,{" "}
          <span className="highl">mais ce n’est pas du catch</span> et tout
          n&apos;est pas permis :
        </p>
        <p>
          Il est autorisé d’attaquer un·e adversaire avec toute partie du corps
          située entre les épaules et les mi-cuisses, à l’exception des coudes,
          des avant-bras et des mains.
        </p>
        <p>
          En revanche il est interdit d&apos;impacter un·e adversaire en dessous des
          mi-cuisses, au-dessus des épaules et dans le dos.
        </p>
        <p>
          Les <span className="highl">règles du Roller Derby</span> sont
          d’ailleurs mises à disposition par la{" "}
          <span className="highl">WFTDA</span> dans leur traduction française
          officielle. Une raison de plus de bien comprendre toutes les nuances
          de ce jeu passionnant !
        </p>
        <p>
          <a
            href="https://static.wftda.com/rules/wftda-rules-french.pdf"
            target="_blank"
          >
            Consulter les Règles du Roller Derby en VF
          </a>
        </p>
      </div>
    </LayoutPage>
  );
}
