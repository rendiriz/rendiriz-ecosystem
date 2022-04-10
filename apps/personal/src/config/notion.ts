import { Client } from '@notionhq/client';

// Blog
export const notionBlog = new Client({
  auth: process.env.NOTION_BLOG_TOKEN,
});

export const getDatabaseBlog = async (databaseId) => {
  const response = await notionBlog.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

export const getPageBlog = async (pageId) => {
  const response = await notionBlog.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlockBlog = async (blockId) => {
  const blocks = [];
  let cursor;
  while (true) {
    const { results, next_cursor: nextCursor } =
      // eslint-disable-next-line no-await-in-loop
      await notionBlog.blocks.children.list({
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

// Notes
export const notionNotes = new Client({
  auth: process.env.NOTION_NOTES_TOKEN,
});

export const getDatabaseNotes = async (databaseId) => {
  const response = await notionNotes.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

export const getPageNotes = async (pageId) => {
  const response = await notionNotes.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlockNotes = async (blockId) => {
  const blocks = [];
  let cursor;
  while (true) {
    const { results, next_cursor: nextCursor } =
      // eslint-disable-next-line no-await-in-loop
      await notionNotes.blocks.children.list({
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
