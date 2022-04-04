function Text({ text }) {
  if (!text) {
    return null;
  }

  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text: textValue,
    } = value;

    return (
      <span
        className={[
          bold ? 'font-bold' : '',
          code ? 'code' : '',
          italic ? 'italic' : '',
          strikethrough ? 'line-through' : '',
          underline ? 'underline' : '',
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {textValue.link ? (
          <a href={textValue.link.url}>{textValue.content}</a>
        ) : (
          textValue.content
        )}
      </span>
    );
  });
}

const renderBlock = (block) => {
  const { type } = block;
  const value = block[type];

  switch (type) {
    case 'paragraph':
      return (
        <p>
          <Text text={value.rich_text} />
        </p>
      );
    default:
      return null;
  }
};

function PostBlock({ block }) {
  return renderBlock(block);
}

export default PostBlock;
