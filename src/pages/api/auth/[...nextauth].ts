import NextAuth from "next-auth"
import { authOptions } from "@kyper/server/auth"
import { type NextApiRequest, type NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return await NextAuth(req, res, authOptions)
}
