import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import { EuiText, EuiTitle } from '@elastic/eui';
import site from '@/config/site';
import favicon from '@/config/favicon';
import ContainerBlogPost from '@/templates/container/BlogPost';

function BlogPost() {
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
      <div className="block">
        <header className="block mt-32px mb-24px">
          <EuiText size="s" color="subdued" className="mb-3">
            Oct 31, 2022
          </EuiText>
          <div className="mb-2">
            <EuiTitle size="m">
              <h1>This is a large title, only one should exist per page</h1>
            </EuiTitle>
          </div>
          <EuiText size="s" color="subdued">
            <EuiTitle>
              <h2>Discover your data</h2>
            </EuiTitle>
          </EuiText>
        </header>
        <section className="prose-lg">
          <p>
            Quickly exploit fully researched systems through corporate services.
            Competently promote state of the art interfaces without progressive
            metrics. Monotonectally architect ethical best practices vis-a-vis
            professional e-services. Continually orchestrate stand-alone
            intellectual capital via cross functional networks. Collaboratively
            reintermediate sustainable metrics before multifunctional models.
            Proactively target distributed relationships with best-of-breed
            functionalities. Conveniently plagiarize seamless leadership via
            user-centric content. Conveniently pontificate vertical best
            practices with backend meta-services. Progressively unleash
            next-generation products through pandemic supply chains.
            Collaboratively plagiarize excellent outside the.
          </p>
          <p>
            Quickly exploit fully researched systems through corporate services.
            Competently promote state of the art interfaces without progressive
            metrics. Monotonectally architect ethical best practices vis-a-vis
            professional e-services. Continually orchestrate stand-alone
            intellectual capital via cross functional networks. Collaboratively
            reintermediate sustainable metrics before multifunctional models.
            Proactively target distributed relationships with best-of-breed
            functionalities. Conveniently plagiarize seamless leadership via
            user-centric content. Conveniently pontificate vertical best
            practices with backend meta-services. Progressively unleash
            next-generation products through pandemic supply chains.
            Collaboratively plagiarize excellent outside the.
          </p>
        </section>
      </div>
    </>
  );
}

BlogPost.Layout = function getLayout(page) {
  return <ContainerBlogPost>{page}</ContainerBlogPost>;
};

export default BlogPost;
