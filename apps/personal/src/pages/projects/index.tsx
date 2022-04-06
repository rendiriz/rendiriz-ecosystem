import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import site from '@/config/site';
import favicon from '@/config/favicon';
import ContainerDefault from '@/templates/container/Default';

function Projects() {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    setFav(favicon('projects'));
  }, []);

  return (
    <>
      <NextSeo
        title="Projects"
        titleTemplate={`${site.title} — %s`}
        description={site.description}
        additionalLinkTags={fav}
      />
      <p>Projects works!</p>
    </>
  );
}

Projects.Layout = function getLayout(page) {
  return <ContainerDefault>{page}</ContainerDefault>;
};

export default Projects;
