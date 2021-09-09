import { NextApiRequest, NextApiResponse } from "next";
import corsMiddleware from "../../utils/cors.middleware";
import S3 from "../../utils/s3Connection"

async function hello(_req:NextApiRequest, res:NextApiResponse) {
  const s3 = new S3()
  res.status(200).json(await s3.fetchAll('pictures'))
}


export default corsMiddleware(hello);