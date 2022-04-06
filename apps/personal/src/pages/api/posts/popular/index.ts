/* eslint-disable consistent-return */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await prisma.post_most_view.findMany({
        take: 5,
        where: {
          isActive: true,
        },
        orderBy: {
          total: 'desc',
        },
      });

      return res.status(200).send(result);
    } catch (err) {
      return res.status(500).send({
        code: 500,
        error: 1,
        message: err.message,
        type: 'UnknownError',
        data: {},
      });
    }
  }
}
