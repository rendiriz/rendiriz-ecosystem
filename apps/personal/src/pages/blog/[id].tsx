import React, { useEffect, useState } from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';

import site from '@/config/site';
import favicon from '@/config/favicon';
import { isNull, plainText, title, category, tags } from '@/lib/notion';
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
        title={title(data.page.properties.Name)}
        titleTemplate={`%s by ${site.title} — Blog`}
        description={
          !isNull(data.page.properties.Description)
            ? plainText(data.page.properties.Description)
            : title(data.page.properties.Name)
        }
        noindex={site.noIndex}
        additionalLinkTags={fav}
        openGraph={{
          title: title(data.page.properties.Name),
          description: !isNull(data.page.properties.Description)
            ? plainText(data.page.properties.Description)
            : title(data.page.properties.Name),
          url: `${site.siteUrl}/blog/${data.page.id}`,
          type: 'article',
          article: {
            publishedTime: data.page.created_time,
            modifiedTime: data.page.last_edited_time,
            section: category(data.page.properties.Category),
            authors: [`https://github.com/${site.githubUsername}`],
            tags: tags(data.page.properties.Tags),
          },
          images: [
            {
              url: !isNull(data.page.properties.Cover)
                ? `https://ik.imagekit.io/tlk1n6viqhs/${plainText(
                    data.page.properties.Cover,
                  )}`
                : `https://placeimg.com/850/650/tech`,
              alt: title(data.page.properties.Name),
            },
          ],
        }}
      />
      <ArticleJsonLd
        type="Blog"
        url={`${site.siteUrl}/blog/${data.page.id}`}
        title={title(data.page.properties.Name)}
        images={[
          !isNull(data.page.properties.Cover)
            ? `https://ik.imagekit.io/tlk1n6viqhs/${plainText(
                data.page.properties.Cover,
              )}`
            : `https://placeimg.com/850/650/tech`,
        ]}
        datePublished={data.page.created_time}
        dateModified={data.page.last_edited_time}
        authorName={site.author}
        description={
          !isNull(data.page.properties.Description)
            ? plainText(data.page.properties.Description)
            : title(data.page.properties.Name)
        }
      />
      <PostHeader
        createdTime={data.page.created_time}
        name={title(data.page.properties.Name)}
        cover={
          !isNull(data.page.properties.Cover)
            ? plainText(data.page.properties.Cover)
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
