/* eslint-disable consistent-return */
import { getPage, getBlocks } from '@/config/notion';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { id } = req.query;

      const page = await getPage(id);
      const blocks = await getBlocks(id);

      const childBlocks = await Promise.all(
        blocks
          .filter((block) => block.has_children)
          .map(async (block) => {
            return {
              id: block.id,
              children: await getBlocks(id),
            };
          }),
      );
      const blocksWithChildren = blocks.map((block) => {
        if (block.has_children && !block[block.type].children) {
          // eslint-disable-next-line no-param-reassign
          block[block.type].children = childBlocks.find(
            (x) => x.id === block.id,
          )?.children;
        }
        return block;
      });

      return res.status(200).send({ page, block: blocksWithChildren });
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
