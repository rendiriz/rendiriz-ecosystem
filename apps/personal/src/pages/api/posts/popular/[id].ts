/* eslint-disable consistent-return */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      const { id } = req.query;

      const result = await prisma.post_most_view.updateMany({
        where: {
          idPost: id,
        },
        data: {
          total: {
            increment: 1,
          },
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
