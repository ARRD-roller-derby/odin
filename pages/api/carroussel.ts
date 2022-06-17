import { NextApiRequest, NextApiResponse } from "next";
import corsMiddleware from "../../utils/cors.middleware";
import S3 from "../../utils/s3Connection"

export default async function carroussel(_req:NextApiRequest, res:NextApiResponse) {
  const s3 = new S3()
  res.status(200).json({
    mobile:await s3.fetchAll('carroussel/mobile'),
    desktop:await s3.fetchAll('carroussel/desktop')
  })
}
