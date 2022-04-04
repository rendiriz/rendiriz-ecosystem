/* eslint-disable consistent-return */
import { notion } from '@/config/notion';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const search = req.query.q || null;

      if (!search) {
        return res.status(200).send([]);
      }

      const query = {
        query: search,
      };

      const response = await notion.search(query);

      return res.status(200).send(response.results);
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
