import { NextApiRequest, NextApiResponse } from "next";
import { sampleServiceData } from "../../../utils/sample-data";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleServiceData)) {
      throw new Error("Cannot find Service data");
    }

    // In a real-world application, this is where we would be fetching the data from an external API or database
    // But instead, we're just going to fake it with dummy data
    res.status(200).json(sampleServiceData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
