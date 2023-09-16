import type { NextApiRequest, NextApiResponse } from "next";
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  console.log(data);
  // if (req.method === "POST") {
  //   const data = JSON.parse(req.body);
  //   console.log(data);
  // }
  return res.status(200).json({ message: data });
  // return res.status(400).json({ message: "Bad request. Please try again" });
};
export default handler;
