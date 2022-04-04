import { Client } from '@notionhq/client';

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId) => {
  const blocks = [];
  let cursor;
  while (true) {
    const { results, next_cursor: nextCursor } =
      // eslint-disable-next-line no-await-in-loop
      await notion.blocks.children.list({
        start_cursor: cursor,
        block_id: blockId,
      });
    blocks.push(...results);
    if (!nextCursor) {
      break;
    }
    cursor = nextCursor;
  }
  return blocks;
};
