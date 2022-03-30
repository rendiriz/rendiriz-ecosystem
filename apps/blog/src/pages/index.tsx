import ContainerHome from '@/templates/container/Home';
import { EuiTitle, EuiButton } from '@elastic/eui';

function Home() {
  return (
    <div className="block">
      <div className="block lg:(mb-40px)">
        <div className="flex justify-center">
          <div className="mx-24px md:(max-w-692px mx-32px)">
            <article className="prose-lg">
              <div className="block">
                <header className="block mt-32px mb-24px lg:(mt-56px mb-32px)">
                  <EuiTitle>
                    <h1>Docs</h1>
                  </EuiTitle>
                </header>
                <section>
                  <div>
                    <div className="break-words">
                      <blockquote>Very useful for styling markdown content!</blockquote>
                      <p>
                        Uniquely fashion interoperable sources without vertical meta-services. Assertively
                        reinvent stand-alone process improvements whereas go forward best practices.
                        Intrinsicly e-enable impactful interfaces without long-term high-impact models.
                        Completely aggregate highly efficient innovation rather than user-centric bandwidth.
                        Proactively simplify fully researched schemas vis-a-vis fully researched quality
                        vectors. Uniquely generate economically sound meta-services before client-focused
                        schemas. Distinctively leverage existing holistic ROI whereas best-of-breed internal
                        or sources. Proactively empower high-quality models after global information.
                        Dramatically simplify market-driven internal or sources whereas multimedia based
                        catalysts for change. Dynamically iterate turnkey web-readiness via high-payoff
                        e-commerce. Completely maintain ethical quality vectors for standardized solutions.
                        Credibly restore functionalized bandwidth for alternative process improvements.
                        Energistically morph corporate applications without effective schemas. Authoritatively
                        enable synergistic synergy whereas market positioning resources. Assertively
                        productivate mission-critical processes whereas progressive networks. Credibly
                        re-engineer out-of-the-box vortals whereas standards compliant e-tailers.
                        Enthusiastically extend parallel thinking without collaborative potentialities.
                        Phosfluorescently extend synergistic partnerships whereas transparent growth
                        strategies. Quickly provide access to ubiquitous leadership skills after enterprise
                        e-markets. Energistically conceptualize cross functional human capital via cost
                        effective networks. Uniquely mesh B2B synergy before interoperable testing procedures.
                        Credibly impact next-generation strategic theme areas through.
                      </p>
                      <EuiButton fill>Docs</EuiButton>
                      <p>
                        Uniquely fashion interoperable sources without vertical meta-services. Assertively
                        reinvent stand-alone process improvements whereas go forward best practices.
                        Intrinsicly e-enable impactful interfaces without long-term high-impact models.
                        Completely aggregate highly efficient innovation rather than user-centric bandwidth.
                        Proactively simplify fully researched schemas vis-a-vis fully researched quality
                        vectors. Uniquely generate economically sound meta-services before client-focused
                        schemas. Distinctively leverage existing holistic ROI whereas best-of-breed internal
                        or sources. Proactively empower high-quality models after global information.
                        Dramatically simplify market-driven internal or sources whereas multimedia based
                        catalysts for change. Dynamically iterate turnkey web-readiness via high-payoff
                        e-commerce. Completely maintain ethical quality vectors for standardized solutions.
                        Credibly restore functionalized bandwidth for alternative process improvements.
                        Energistically morph corporate applications without effective schemas. Authoritatively
                        enable synergistic synergy whereas market positioning resources. Assertively
                        productivate mission-critical processes whereas progressive networks. Credibly
                        re-engineer out-of-the-box vortals whereas standards compliant e-tailers.
                        Enthusiastically extend parallel thinking without collaborative potentialities.
                        Phosfluorescently extend synergistic partnerships whereas transparent growth
                        strategies. Quickly provide access to ubiquitous leadership skills after enterprise
                        e-markets. Energistically conceptualize cross functional human capital via cost
                        effective networks. Uniquely mesh B2B synergy before interoperable testing procedures.
                        Credibly impact next-generation strategic theme areas through.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.Layout = function getLayout(page) {
  return <ContainerHome>{page}</ContainerHome>;
};

export default Home;