/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-case-declarations */
import { EuiCodeBlock } from '@elastic/eui';

function Text({ text }) {
  if (!text) {
    return null;
  }

  return text.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text: textValue,
    } = value;

    const spanStyle = {};

    if (bold) {
      Object.assign(spanStyle, { fontWeight: 'bold' });
    }

    if (italic) {
      Object.assign(spanStyle, { fontStyle: 'italic' });
    }

    if (strikethrough) {
      Object.assign(spanStyle, { textDecorationLine: 'line-through' });
    }

    if (underline) {
      Object.assign(spanStyle, { textDecorationLine: 'underline' });
    }

    if (color !== 'default') {
      if (color.includes('_background')) {
        Object.assign(spanStyle, {
          backgroundColor: color.replace('_background', ''),
        });
      } else {
        Object.assign(spanStyle, { color });
      }
    }

    if (code) {
      Object.assign(spanStyle, {
        fontFamily: '"Roboto Mono",Consolas,Menlo,Courier,monospace',
        letterSpacing: 'normal',
        borderRadius: '4px',
        fontWeight: 700,
        color: '#7c609e',
        fontSize: '.9em',
        padding: '0.2em 0.5em',
        background: '#F5F7FA',
      });
    }

    return (
      <span key={index} style={spanStyle}>
        {textValue.link ? (
          <a href={textValue.link.url} className="hover:underline">
            {textValue.content}
          </a>
        ) : (
          textValue.content
        )}
      </span>
    );
  });
}

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'heading_1':
      return (
        <h1>
          <Text text={value.rich_text} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2>
          <Text text={value.rich_text} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3>
          <Text text={value.rich_text} />
        </h3>
      );
    case 'paragraph':
      return (
        <p>
          <Text text={value.rich_text} />
        </p>
      );
    case 'divider':
      return <hr key={id} />;
    case 'quote':
      return (
        <blockquote key={id} className="euiMarkdownFormat__blockquote">
          {value.rich_text[0].plain_text}
        </blockquote>
      );
    case 'image':
      const imgStyle = {
        marginBottom: 0,
      };
      const captionStyle = {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#f5f7fa',
        fontSize: '12px',
        color: '#69707d',
        padding: '0.5em',
      };

      const src =
        value.type === 'external' ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <figure>
          <img src={src} alt={caption} style={imgStyle} />
          {caption && <figcaption style={captionStyle}>{caption}</figcaption>}
        </figure>
      );
    case 'code':
      return (
        <EuiCodeBlock
          language={value.language}
          fontSize="m"
          whiteSpace="pre"
          isCopyable
        >
          {value.rich_text[0].plain_text}
        </EuiCodeBlock>
      );
    default:
      return null;
  }
};

function PostBlock({ block }) {
  return renderBlock(block);
}

export default PostBlock;
