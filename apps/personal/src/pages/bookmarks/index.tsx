import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import site from '@/config/site';
import favicon from '@/config/favicon';
import ContainerDefault from '@/templates/container/Default';

function Bookmarks() {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    setFav(favicon('bookmarks'));
  }, []);

  return (
    <>
      <NextSeo
        title="Bookmarks"
        titleTemplate={`${site.title} — %s`}
        description={site.description}
        additionalLinkTags={fav}
      />
      <p>Bookmarks works!</p>
    </>
  );
}

Bookmarks.Layout = function getLayout(page) {
  return <ContainerDefault>{page}</ContainerDefault>;
};

export default Bookmarks;
