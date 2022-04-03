import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import { EuiButton, EuiHorizontalRule, EuiTitle } from '@elastic/eui';
import { dehydrate, QueryClient, useInfiniteQuery } from 'react-query';
import qs from 'qs';

import site from '@/config/site';
import favicon from '@/config/favicon';
import ContainerBlog from '@/templates/container/Blog';
import PostList from '@/components/PostList';

const getPosts = async ({ pageParam = null }): Promise<any> => {
  let questionMark = '';
  const pParams = {};

  if (pageParam) {
    questionMark = '?';
    Object.assign(pParams, { cursor: pageParam });
  }

  const merge = qs.stringify(pParams);
  const res = await fetch(`/api/posts${questionMark}${merge}`);
  return res.json();
};

export async function getStaticProps() {
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
  const {
    data,
    error,
    status,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery<any, Error>('posts', getPosts, {
    getNextPageParam: (lastPage) => lastPage.nextId ?? undefined,
  });

  useEffect(() => {
    setFav(favicon('blog'));
  }, []);

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }

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

        {data.pages.map((group, index: number) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div className="mt-12px mb-32px">
                <EuiHorizontalRule margin="none" />
              </div>
            )}
            <PostList posts={group.data} />
          </React.Fragment>
        ))}

        <div className="pt-14 pb-16 md:(pb-18) lg:(pb-20)">
          <div className="block text-center max-w-full">
            <EuiButton
              fill
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                ? 'Load More'
                : 'Nothing more to load'}
            </EuiButton>
          </div>
          <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </div>
      </div>
    </>
  );
}

Blog.Layout = function getLayout(page) {
  return <ContainerBlog>{page}</ContainerBlog>;
};

export default Blog;
