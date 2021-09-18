import { NextApiRequest, NextApiResponse } from "next";
import corsMiddleware from "../../utils/cors.middleware";
import axios from "axios";
import { fbArticleInterface } from "../../utils/interfaces";

async function actu(_req: NextApiRequest, res: NextApiResponse) {
  const { data } = await axios.get(process.env.FACEBOOK_URL_ACTU + "/feed", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers": "Content-Type, Accept",
    },
    params: { access_token: process.env.FACEBOOK_ACCESS_TOKEN },
  });

  return res.json({
    articles: data.data
      .filter((item:fbArticleInterface) => !!item.message)
      .map((post:fbArticleInterface) => {
        const paragraph = [];
        post.message.split(" ").forEach((word) => {
          const htmlLink = word.search(/http/g);
          if (htmlLink >= 0) {
            const txtLink = word.replace(/(http|https):\/\//gi, "").split("/"),
              cleanLink = word.split(/(http|https)/gi);
            paragraph.push(
              `<a href="http${
                cleanLink[cleanLink.length - 1]
              }" target="_blank">${txtLink[0].replace(/:/, "")}</a>`
            );
          } else {
            const hashTag = word.search(/#/g);
            if (hashTag >= 0) {
              const hashWord = word.replace(/[^0-9a-zA-ZÀ-ÿ]/gim, "");
              paragraph.push(
                `<a href="https://www.facebook.com/hashtag/${hashWord}" class="hashtag">#${hashWord}</a>`
              );
            } else {
              paragraph.push(word);
            }
          }
        });
        post.message = paragraph.join(" ");
        return post;
      }),
  });
}

export default corsMiddleware(actu);
