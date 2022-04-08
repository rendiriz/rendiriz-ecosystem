import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import site from '@/config/site';
import favicon from '@/config/favicon';
import ContainerHome from '@/templates/container/Home';
import HeaderHero from '@/components/HeaderHero';

function Home() {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    setFav(favicon('default'));
  }, []);

  return (
    <>
      <NextSeo
        title={site.title}
        titleTemplate="%s"
        description={site.description}
        canonical={site.siteUrl}
        noindex={site.noIndex}
        additionalLinkTags={fav}
      />
      <main className="w-full pt-48px">
        <HeaderHero />
      </main>
    </>
  );
}

Home.Layout = function getLayout(page) {
  return <ContainerHome>{page}</ContainerHome>;
};

export default Home;
