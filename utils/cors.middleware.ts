import { NextApiRequest, NextApiResponse } from "next";

const corsMiddleware =
  (fn: Function) => async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization;
    if (token) {
      if (token.replace("Bearer ", "") === process.env.CORS_TOKEN) {
        return await fn(req, res);
      } else {
        res.statusCode = 403;
        res.end("non autorisé");
      }
    } else {
      res.statusCode = 403;
      res.end("non autorisé");
    }
  };

export default corsMiddleware;
