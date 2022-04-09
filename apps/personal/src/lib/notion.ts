export const title = (value: any) => {
  let result = '';

  if (value.title.length > 1) {
    value.title.forEach((item) => {
      result += item.plain_text;
    });
  } else {
    result = value.title[0].plain_text;
  }

  return result;
};

export const description = (value: any) => {
  if (Array.isArray(value.rich_text) && value.rich_text.length) {
    return value.rich_text[0].plain_text;
  }

  return null;
};

export const category = (value: any) => {
  return value.select.name;
};

export const tags = (value: any) => {
  return value.multi_select.map((resTag) => resTag.name);
};

// Global
export const isNull = (value: any) => {
  if (Array.isArray(value.rich_text) && value.rich_text.length) {
    return false;
  }

  return true;
};

export const plainText = (value: any) => {
  return value.rich_text[0].plain_text;
};
