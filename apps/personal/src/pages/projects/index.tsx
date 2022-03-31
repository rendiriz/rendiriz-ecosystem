import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import site from '@/config/site';
import favicon from '@/config/favicon';
import ContainerHome from '@/templates/container/Home';
import { EuiButton } from '@elastic/eui';

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
      <div className="py-500px">asdf</div>
      <EuiButton fill>Docs</EuiButton>
    </>
  );
}

Projects.Layout = function getLayout(page) {
  return <ContainerHome>{page}</ContainerHome>;
};

export default Projects;
