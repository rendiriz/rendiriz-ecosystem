import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
// import { EuiLoadingSpinner } from '@elastic/eui';
// import { dehydrate, QueryClient, useQuery, useMutation } from 'react-query';

import site from '@/config/site';
import favicon from '@/config/favicon';
// import { getDatabase } from '@/config/notion';
import ContainerBlogPost from '@/templates/container/BlogPost';
import PostHeader from '@/components/PostHeader';
import NotionPage from '@/components/NotionPage';

// const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

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

// export async function getStaticPaths() {
//   const database = await getDatabase(databaseId);

//   return {
//     paths: database.map((page) => ({ params: { id: page.id } })),
//     fallback: true,
//   };
// }

export async function getServerSideProps({ params }) {
  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery(['posts', params.id], () =>
  //   getPost(params.id),
  // );

  await putPostPopular(params.id);
  const post = await getPost(params.id);

  return {
    props: {
      id: params.id,
      data: post,
      // dehydratedState: dehydrate(queryClient),
    },
  };
}

function BlogPost({ id, data }) {
  const [fav, setFav] = useState([]);
  const [title, setTitle] = useState('Hello');
  const [description, setDescription] = useState(`${site.title}'s Blog`);
  const [image, setImage] = useState('https://placeimg.com/850/650/tech');
  const [category, setCategory] = useState('Tech');
  const [tags, setTags] = useState([]);
  const [published, setPublished] = useState('');
  const [modified, setModified] = useState('');

  // const mutation = useMutation(() => putPostPopular(id));

  // const { data, error, status } = useQuery<any, Error>(
  //   ['posts', id],
  //   () => getPost(id),
  //   // {
  //   //   onSuccess: (res) => {
  //   //     setTitle(res.page.properties.Name.title[0].plain_text);

  //   //     if (res.page.properties.Description.rich_text.length) {
  //   //       setDescription(
  //   //         res.page.properties.Description.rich_text[0].plain_text,
  //   //       );
  //   //     } else {
  //   //       setDescription(res.page.properties.Name.title[0].plain_text);
  //   //     }

  //   //     if (res.page.properties.Cover.rich_text.length) {
  //   //       setImage(
  //   //         `https://ik.imagekit.io/tlk1n6viqhs/${res.page.properties.Cover.rich_text[0].plain_text}`,
  //   //       );
  //   //     }

  //   //     setCategory(res.page.properties.Category.select.name);

  //   //     setTags(
  //   //       res.page.properties.Tags.multi_select.map((resTag) => resTag.name),
  //   //     );

  //   //     setPublished(res.page.created_time);
  //   //     setModified(res.page.last_edited_time);
  //   //   },
  //   // },
  // );

  useEffect(() => {
    setFav(favicon('blog'));
    // mutation.mutate();

    setTitle(data.page.properties.Name.title[0].plain_text);

    if (data.page.properties.Description.rich_text.length) {
      setDescription(data.page.properties.Description.rich_text[0].plain_text);
    } else {
      setDescription(data.page.properties.Name.title[0].plain_text);
    }

    if (data.page.properties.Cover.rich_text.length) {
      setImage(
        `https://ik.imagekit.io/tlk1n6viqhs/${data.page.properties.Cover.rich_text[0].plain_text}`,
      );
    }

    setCategory(data.page.properties.Category.select.name);

    setTags(
      data.page.properties.Tags.multi_select.map((resTag) => resTag.name),
    );

    setPublished(data.page.created_time);
    setModified(data.page.last_edited_time);
  }, []);

  return (
    <>
      <NextSeo
        title={title}
        titleTemplate={`%s by ${site.title} — Blog`}
        description={description}
        noindex={site.noIndex}
        additionalLinkTags={fav}
        openGraph={{
          title,
          description,
          url: `${site.siteUrl}/blog/${id}`,
          type: 'article',
          article: {
            publishedTime: published,
            modifiedTime: modified,
            section: category,
            authors: [`https://github.com/${site.githubUsername}`],
            tags,
          },
          images: [
            {
              url: image,
              alt: title,
            },
          ],
        }}
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
      {/* <NextSeo
        title={data.page.properties.Name.title[0].plain_text}
        titleTemplate={`%s by ${site.title} — Blog`}
        description={description}
        noindex={site.noIndex}
        additionalLinkTags={fav}
        openGraph={{
          title,
          description,
          url: `${site.siteUrl}/blog/${id}`,
          type: 'article',
          article: {
            publishedTime: published,
            modifiedTime: modified,
            section: category,
            authors: [`https://github.com/${site.githubUsername}`],
            tags,
          },
          images: [
            {
              url: image,
              alt: title,
            },
          ],
        }}
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
            <NotionPage recordMap={data.block} previewImagesEnabled />
          </>
        )}
      </div> */}
    </>
  );
}

BlogPost.Layout = function getLayout(page) {
  return <ContainerBlogPost>{page}</ContainerBlogPost>;
};

export default BlogPost;
