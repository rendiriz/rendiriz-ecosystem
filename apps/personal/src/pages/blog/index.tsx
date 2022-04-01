import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import site from '@/config/site';
import favicon from '@/config/favicon';
import ContainerBlog from '@/templates/container/Blog';
import { EuiButton } from '@elastic/eui';

function Blog() {
  const [fav, setFav] = useState([]);

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
      <p>Blog works!</p>
      <div className="py-500px">asdf</div>
      <EuiButton fill>Docs</EuiButton>
    </>
  );
}

Blog.Layout = function getLayout(page) {
  return <ContainerBlog>{page}</ContainerBlog>;
};

export default Blog;
