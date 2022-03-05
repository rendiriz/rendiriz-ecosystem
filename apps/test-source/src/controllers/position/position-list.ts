import { Request, Response } from 'express';

async function getList(req: Request) {
  return {
    req,
  };
}

const list = async (req: Request, res: Response) => {
  const qList = await getList(req);
  return res.status(200).json(qList);
};

export { list, getList };
