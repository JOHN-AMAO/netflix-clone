import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  } else {
    try {
      const { email, username, password } = req.body;
    } catch (error) {
      return res.status(400).end();
    }
  }
}
