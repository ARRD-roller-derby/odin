import { NextApiRequest, NextApiResponse } from "next";

export default async function events(_req: NextApiRequest, res: NextApiResponse) {

  try {
    const response = await fetch('https://valhalla.arrd.fr/api/events/public')
    const data = await response.json()
    return res.json(data);
  } catch (error) {
    return res.status(200).json([]);
  }
}


