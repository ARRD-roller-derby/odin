import LayoutPage from "../lib/LayoutPage/LayoutPage";
import classes from "./../styles/Page.module.css";
import odin from "../utils/odin";

export default function Actu() {
  return (
    <LayoutPage
      title="Actualité"
      description="Retouvez l'actualité du club."
      img="/rd_explain.webp"
    >
      <section className={classes.fbArticles}>
        <a href="https://www.facebook.com/ARRD76" target="_blank" rel="noreferrer">
          Actualités
        </a>
      </section>
    </LayoutPage>
  );
}
  