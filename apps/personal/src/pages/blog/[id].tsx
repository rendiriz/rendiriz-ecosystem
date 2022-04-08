import React, { useEffect, useState } from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';

import site from '@/config/site';
import favicon from '@/config/favicon';
import ContainerBlogPost from '@/templates/container/BlogPost';
import PostHeader from '@/components/PostHeader';
import NotionPage from '@/components/NotionPage';

const getPost = async (id): Promise<any> => {
  const res = await fetch(`${site.siteUrl}/api/posts/${id}`);
  return res.json();
};

const putPostPopular = async (id): Promise<any> => {
  const res = await fetch(`${site.siteUrl}/api/posts/popular/${id}`, {
    method: 'PUT',
  });
  return res.json();
};

export async function getServerSideProps({ params }) {
  await putPostPopular(params.id);
  const post = await getPost(params.id);

  return {
    props: {
      data: post,
    },
  };
}

function BlogPost({ data }) {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    setFav(favicon('blog'));
  }, []);

  return (
    <>
      <NextSeo
        title={data.page.properties.Name.title[0].plain_text}
        titleTemplate={`%s by ${site.title} — Blog`}
        description={
          data.page.properties.Description.rich_text.length
            ? data.page.properties.Description.rich_text[0].plain_text
            : data.page.properties.Name.title[0].plain_text
        }
        noindex={site.noIndex}
        additionalLinkTags={fav}
        openGraph={{
          title: data.page.properties.Name.title[0].plain_text,
          description: data.page.properties.Description.rich_text.length
            ? data.page.properties.Description.rich_text[0].plain_text
            : data.page.properties.Name.title[0].plain_text,
          url: `${site.siteUrl}/blog/${data.page.id}`,
          type: 'article',
          article: {
            publishedTime: data.page.created_time,
            modifiedTime: data.page.last_edited_time,
            section: data.page.properties.Category.select.name,
            authors: [`https://github.com/${site.githubUsername}`],
            tags: data.page.properties.Tags.multi_select.map(
              (resTag) => resTag.name,
            ),
          },
          images: [
            {
              url: data.page.properties.Cover.rich_text.length
                ? `https://ik.imagekit.io/tlk1n6viqhs/${data.page.properties.Cover.rich_text[0].plain_text}`
                : `https://placeimg.com/850/650/tech`,
              alt: data.page.properties.Name.title[0].plain_text,
            },
          ],
        }}
      />
      <ArticleJsonLd
        type="Blog"
        url={`${site.siteUrl}/blog/${data.page.id}`}
        title={data.page.properties.Name.title[0].plain_text}
        images={[
          data.page.properties.Cover.rich_text.length
            ? `https://ik.imagekit.io/tlk1n6viqhs/${data.page.properties.Cover.rich_text[0].plain_text}`
            : `https://placeimg.com/850/650/tech`,
        ]}
        datePublished={data.page.created_time}
        dateModified={data.page.last_edited_time}
        authorName={site.author}
        description={
          data.page.properties.Description.rich_text.length
            ? data.page.properties.Description.rich_text[0].plain_text
            : data.page.properties.Name.title[0].plain_text
        }
      />
      <PostHeader
        createdTime={data.page.created_time}
        name={data.page.properties.Name.title[0].plain_text}
        cover={
          data.page.properties.Cover.rich_text.length
            ? data.page.properties.Cover.rich_text[0].plain_text
            : null
        }
      />
      <NotionPage recordMap={data.block} previewImagesEnabled />
    </>
  );
}

BlogPost.Layout = function getLayout(page) {
  return <ContainerBlogPost>{page}</ContainerBlogPost>;
};

export default BlogPost;
