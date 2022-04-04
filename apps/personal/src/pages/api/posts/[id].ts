/* eslint-disable consistent-return */
import { NotionAPI } from 'notion-client';
import { getPage } from '@/config/notion';

const api = new NotionAPI();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { id } = req.query;

      const page = await getPage(id);
      const block = await api.getPage(id);

      return res.status(200).send({ page, block });
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
