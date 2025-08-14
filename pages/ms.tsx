import LayoutPage from "../lib/LayoutPage/LayoutPage";
import Link from "next/link";

export default function Ms() {
  return (
    <LayoutPage
      title="Les Minimum skills"
      description="Ce qu’on appelle “Minimum Skills” (MS), c’est le niveau théorique et pratique à atteindre pour pouvoir jouer au roller derby en toute sécurité et participer à des matchs."
    >
      <div className="container">
        <p>
          Ce qu’on appelle <span className="trash">“Minimum Skills”</span> {'('}MS{')'},
          c’est le niveau théorique et pratique à atteindre pour pouvoir jouer
          au roller derby en toute sécurité et participer à des matchs..
        </p>
        <p>
          Il te faut obtenir tes MS pour rejoindre officiellement notre équipe !
        </p>
        <p>
          “Passer ses MS”, c’est passer deux tests, qui vont attester d’un
          niveau de patinage suffisant et d’une bonne compréhension des règles
          du roller derby.
        </p>
        <h2>MS Théoriques</h2>
        <p>
          L’asso fait passer les <span className="trash">MST</span> tous les
          premiers dimanches du mois, pendant l’entraînement.
        </p>
        <p>Pour préparer ses MST, pas de secret :</p>
        <ul>
          <li>
            Potasser les <a
              href="https://static.wftda.com/rules/wftda-rules-french.pdf"
              target="_blank"
              rel="noreferrer"
            >
              règles officielles
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/TheWFTDA" target="_blank" rel="noreferrer">
              Regarder des matchs
            </a> {'('}sur Youtube, mais dans la vraie vie aussi{')'}
          </li>
          <li>
            Participer en tant que NSO {'('}Non Skating Official{')'} à des matchs
            locaux
          </li>
        </ul>

        <h2>MS Pratiques</h2>
        <p>
          Les <span className="trash">MSP</span> sont un ensemble d’exercices de
          patinage et de contact à réussir dans le cadre d’un test organisé par
          l’asso OU une asso partenaire.
        </p>
        <p>
          Il faut savoir patiner, freiner, tomber, sauter, slalomer, impacter
          légalement, recevoir un impact, rouler en groupe, rouler en arrière,
          rouler sur un pied, faire un demi-tour … et bien d’autres choses
          encore. Fais confiance aux coaches, ils sauront te dire si tu es
          prêt.e à tenter les MSP {';-)'}
        </p>
        <p>Pour préparer ses MSP :</p>
        <ul>
          <li>
            Roule autant que tu peux, y compris en extérieur, c’est très
            formateur.
          </li>
          <li>
            Viens à <Link href="/entrainements">l’entraînement</Link> {'('}les
            entraînements du dimanche sont spécifiquement dédiés à la prépa
            MSP{')'}.
          </li>
        </ul>
      </div>
    </LayoutPage>
  );
}
