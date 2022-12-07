// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import schedule from "node-schedule";
const date = new Date();
date.setSeconds(date.getSeconds() + 20);

const job = schedule.scheduleJob(date, function () {
  console.log("The world is going to end today.");
});

console.log("job start");

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
