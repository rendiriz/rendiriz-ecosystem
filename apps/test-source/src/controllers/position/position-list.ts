import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

import { OkList, ErrorNotFound, ErrorHandler } from 'lib';

const prisma = new PrismaClient();

async function getList(req: Request) {
  const request = req;
  console.info(request);

  const qList = await prisma.position.findMany({
    where: {
      isActive: true,
      isDeleted: false,
    },
    orderBy: {
      updatedAt: 'desc',
    },
  });

  return qList;
}

const list = async (req: Request, res: Response) => {
  try {
    await prisma.$connect();
    const qList = await getList(req);

    if (qList) {
      return OkList(qList, {}, 'Retrieve data successfully.', res);
    }

    return ErrorNotFound('Data not found.', res);
  } catch (err) {
    return ErrorHandler(err, res);
  } finally {
    await prisma.$disconnect();
  }
};

export { list, getList };
