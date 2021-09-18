import LayoutPage from "../lib/LayoutPage/LayoutPage";
import classes from "./../styles/Page.module.css";
import odin from "../utils/odin";
import { fbArticleInterface } from '../utils/interfaces';
import dayjs from "dayjs"

export default function Actu({articles}: {articles: Array<fbArticleInterface>}) {


  return (
    <LayoutPage
      title="Actualité"
      description="Retouvez l'actualité du club."
      img="/rd_explain.webp"
    >
      <section className={classes.fbArticles}>
       {articles.map((article: fbArticleInterface)=><article key={article.message} className={classes.fbArticle}>
           <p className={classes.date}>{dayjs(article.created_time).fromNow()}</p>
       <p dangerouslySetInnerHTML={{ __html: article.message }}/>
       </article>)}
      </section>
    </LayoutPage>
  );
}

export async function getServerSideProps({ req }) {
    const baseUrl = `${process.env.NO_SSL ? "http" : "https"}://${
        req.headers.host
      }`,
      { data } = await odin.get(`${baseUrl}/api/actu`);
  
    return {
      props: {
        articles: data.articles,
      },
    };
  }
  