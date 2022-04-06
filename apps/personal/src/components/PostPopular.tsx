import React from 'react';
import { EuiLoadingSpinner, EuiTitle } from '@elastic/eui';
import { dehydrate, QueryClient, useQuery } from 'react-query';

import PostPreviewListPopular from '@/components/PostPreviewListPopular';

const getPostsPopular = async (): Promise<any> => {
  const res = await fetch(`/api/posts/popular`);
  return res.json();
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('posts', getPostsPopular);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function PostPopular() {
  const { data, error, status } = useQuery<any, Error>(
    'postsPopular',
    getPostsPopular,
  );

  return (
    <>
      <div className="mb-14px">
        <EuiTitle size="xs">
          <h3>Popular</h3>
        </EuiTitle>
      </div>
      {status === 'loading' ? (
        <div className="block flex justify-center mt-48px mb-36px">
          <EuiLoadingSpinner size="xxl" />
        </div>
      ) : status === 'error' ? (
        <div className="block flex justify-center mt-48px mb-36px">
          <p>Error: {error.message}</p>
        </div>
      ) : (
        <PostPreviewListPopular posts={data} />
      )}
    </>
  );
}

export default PostPopular;
