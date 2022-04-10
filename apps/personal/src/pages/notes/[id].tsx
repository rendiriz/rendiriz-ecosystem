import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import { EuiTitle } from '@elastic/eui';

import site from '@/config/site';
import favicon from '@/config/favicon';
import { title, category, tags } from '@/lib/notion';
import ContainerNotesPost from '@/templates/container/NotesPost';
import NotionPage from '@/components/NotionPage';

const getPost = async (id): Promise<any> => {
  const res = await fetch(`${site.siteUrl}/api/notes/${id}`);
  return res.json();
};

export async function getServerSideProps({ params }) {
  const post = await getPost(params.id);

  return {
    props: {
      data: post,
    },
  };
}

function NotesPost({ data }) {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    setFav(favicon('blog'));
  }, []);

  return (
    <>
      <NextSeo
        title={title(data.page.properties.Name)}
        titleTemplate={`%s by ${site.title} — Notes`}
        noindex={site.noIndex}
        additionalLinkTags={fav}
        openGraph={{
          title: title(data.page.properties.Name),
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
              url: `https://placeimg.com/850/650/tech`,
              alt: title(data.page.properties.Name),
            },
          ],
        }}
      />
      <header className="block mt-48px mb-24px">
        <div className="mb-2">
          <EuiTitle size="l">
            <h1>{title(data.page.properties.Name)}</h1>
          </EuiTitle>
        </div>
      </header>
      <NotionPage recordMap={data.block} previewImagesEnabled />
    </>
  );
}

NotesPost.Layout = function getLayout(page) {
  return <ContainerNotesPost>{page}</ContainerNotesPost>;
};

export default NotesPost;
