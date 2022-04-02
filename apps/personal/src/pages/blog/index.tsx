import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import { EuiButton, EuiTitle } from '@elastic/eui';
import { dehydrate, QueryClient, useQuery } from 'react-query';

import site from '@/config/site';
import favicon from '@/config/favicon';
import notion from '@/config/notion';
import ContainerBlog from '@/templates/container/Blog';
import PostList from '@/components/PostList';

const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

async function getPosts(): Promise<any[]> {
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response.results;
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('posts', getPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function Blog() {
  const [fav, setFav] = useState([]);
  const { data, isSuccess } = useQuery<any[], Error>('posts', getPosts);

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
        <header className="block mt-48px mb-36px">
          <div className="mb-2">
            <EuiTitle size="l">
              <h1>Blog</h1>
            </EuiTitle>
          </div>
        </header>
        {isSuccess && <PostList posts={data} />}
        <div className="pt-14 pb-16 md:(pb-18) lg:(pb-20)">
          <div className="block text-center max-w-full">
            <EuiButton fill>Load more</EuiButton>
          </div>
        </div>
      </div>
    </>
  );
}

Blog.Layout = function getLayout(page) {
  return <ContainerBlog>{page}</ContainerBlog>;
};

export default Blog;
