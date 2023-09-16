import type { NextApiRequest, NextApiResponse } from "next";
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;
    if (
      !formValues.firstName ||
      !formValues.lastName ||
      !formValues.email ||
      !formValues.subject ||
      !formValues.message
    ) {
      return res.status(400).json({ message: "Bad request. Please try again" });
    }
  }
  return res.status(400).json({ message: "Bad request. Please try again" });
};
export default handler;
