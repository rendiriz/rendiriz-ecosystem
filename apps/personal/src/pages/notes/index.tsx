import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import { EuiButton, EuiLoadingSpinner, EuiTitle } from '@elastic/eui';
import { dehydrate, QueryClient, useInfiniteQuery } from 'react-query';
import qs from 'qs';

import site from '@/config/site';
import favicon from '@/config/favicon';
import ContainerNotes from '@/templates/container/Notes';
import NotesPreviewList from '@/components/NotesPreviewList';

const getPosts = async ({ pageParam = null }): Promise<any> => {
  let questionMark = '';
  const pParams = {};

  if (pageParam) {
    questionMark = '?';
    Object.assign(pParams, { cursor: pageParam });
  }

  const merge = qs.stringify(pParams);
  const res = await fetch(`/api/notes${questionMark}${merge}`);
  return res.json();
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('notes', getPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function Notes() {
  const [fav, setFav] = useState([]);
  const {
    data,
    error,
    status,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery<any, Error>('notes', getPosts, {
    getNextPageParam: (lastPage) => lastPage.nextId ?? undefined,
  });

  useEffect(() => {
    setFav(favicon('notes'));
  }, []);

  return (
    <>
      <NextSeo
        title="Notes"
        titleTemplate={`${site.title} — %s`}
        description={`${site.title}'s Notes`}
        noindex={site.noIndex}
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
            <header className="block mt-48px mb-36px">
              <div className="mb-2">
                <EuiTitle size="l">
                  <h1>Notes</h1>
                </EuiTitle>
              </div>
            </header>

            {data.pages.map((group, index: number) => (
              <React.Fragment key={index}>
                <NotesPreviewList posts={group.data} />
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
              <div>
                {isFetching && !isFetchingNextPage ? 'Fetching...' : null}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

Notes.Layout = function getLayout(page) {
  return <ContainerNotes>{page}</ContainerNotes>;
};

export default Notes;
