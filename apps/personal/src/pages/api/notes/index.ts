/* eslint-disable consistent-return */
import { notionNotes as notion } from '@/config/notion';

const databaseId = process.env.NEXT_PUBLIC_NOTION_NOTES_DATABASE_ID;

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const cursor = req.query.cursor || null;

      const query = {
        database_id: databaseId,
        filter: {
          property: 'Status',
          select: {
            equals: 'active',
          },
        },
        page_size: 5,
      };

      if (cursor) {
        Object.assign(query, { start_cursor: cursor });
      }

      const response = await notion.databases.query(query);

      return res
        .status(200)
        .send({ data: response.results, nextId: response.next_cursor });
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
