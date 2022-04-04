import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import { EuiLoadingSpinner } from '@elastic/eui';
import { dehydrate, QueryClient, useQuery } from 'react-query';

import site from '@/config/site';
import favicon from '@/config/favicon';
import { getDatabase } from '@/config/notion';
import ContainerBlogPost from '@/templates/container/BlogPost';
import PostHeader from '@/components/PostHeader';
import PostBlock from '@/components/PostBlock';

const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

const getPost = async (id): Promise<any> => {
  const res = await fetch(`/api/posts/${id}`);
  return res.json();
};

export async function getStaticPaths() {
  const database = await getDatabase(databaseId);

  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['posts', params.id], () =>
    getPost(params.id),
  );

  return {
    props: {
      id: params.id,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function BlogPost({ id }) {
  const [fav, setFav] = useState([]);
  const { data, error, status } = useQuery<any, Error>(['posts', id], () =>
    getPost(id),
  );

  useEffect(() => {
    setFav(favicon('blog'));
  }, []);

  return (
    <>
      <NextSeo
        title="Blog"
        titleTemplate={`${site.title} — %s`}
        description={site.description}
        additionalLinkTags={fav}
      />
      <div className="block">
        {status === 'loading' ? (
          <div className="block flex justify-center mt-48px mb-36px">
            <EuiLoadingSpinner size="xxl" />
          </div>
        ) : status === 'error' ? (
          <div className="block flex justify-center mt-48px mb-36px">
            <p>Error: {error.message}</p>
          </div>
        ) : (
          <>
            <PostHeader
              createdTime={data.page.created_time}
              name={data.page.properties.Name.title[0].plain_text}
              cover={
                data.page.properties.Cover.rich_text.length
                  ? data.page.properties.Cover.rich_text[0].plain_text
                  : null
              }
            />
            <section className="prose-lg">
              {data.block.map((block) => (
                <React.Fragment key={block.id}>
                  <PostBlock block={block} />
                </React.Fragment>
              ))}
            </section>
          </>
        )}
      </div>
    </>
  );
}

BlogPost.Layout = function getLayout(page) {
  return <ContainerBlogPost>{page}</ContainerBlogPost>;
};

export default BlogPost;
