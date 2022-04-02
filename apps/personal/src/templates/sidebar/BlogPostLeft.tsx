import { useRouter } from 'next/router';
import Link from 'next/link';
import { EuiLink, EuiText, EuiToolTip } from '@elastic/eui';
import {
  RiTwitterFill,
  RiFacebookCircleFill,
  RiLinkedinBoxFill,
  RiLinksFill,
} from 'react-icons/ri';
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from 'react-share';
import site from '@/config/site';

function BlogPostLeft() {
  const { asPath } = useRouter();

  const url = `${site.siteUrl}${asPath}`;

  return (
    <div
      border="t-0 r-0 b-1 l-0 lg:(t-0 r-1 b-0 l-0) solid gray-200"
      className="w-auto px-4 lg:(w-80px flex-shrink min-h-screen px-2)"
    >
      <nav className="h-full">
        <div className="block h-full">
          <div className="flex flex-row h-48px z-1 top-48px items-center justify-center lg:(sticky flex-col h-[calc(100vh_-_48px)] justify-between)">
            <div className="hidden lg:(block py-40px text-center)">
              <EuiToolTip position="right" content="Blog">
                <Link href="/blog" passHref>
                  <EuiLink color="subdued">cd ..</EuiLink>
                </Link>
              </EuiToolTip>
            </div>
            <div className="<lg:(flex h-full items-center) lg:(block)">
              <div className="mr-16px lg:(block mr-0 pb-20px text-center)">
                <div className="block lg:hidden">
                  <EuiText color="subdued">Share:</EuiText>
                </div>
                <div className="hidden lg:block">
                  <EuiToolTip position="right" content="Social Share">
                    <EuiText color="subdued" className="cursor-default">
                      ssh
                    </EuiText>
                  </EuiToolTip>
                </div>
              </div>
              <div className="mr-12px lg:(block mr-0 pb-20px text-center)">
                <div className="block lg:hidden">
                  <TwitterShareButton url={url}>
                    <EuiText color="subdued">
                      <RiTwitterFill className="euiIcon euiIcon--large" />
                    </EuiText>
                  </TwitterShareButton>
                </div>
                <div className="hidden lg:block">
                  <EuiToolTip position="right" content="Twitter">
                    <TwitterShareButton url={url}>
                      <EuiText
                        color="subdued"
                        size="s"
                        className="hover:underline"
                      >
                        tw
                      </EuiText>
                    </TwitterShareButton>
                  </EuiToolTip>
                </div>
              </div>
              <div className="mr-12px lg:(block mr-0 pb-20px text-center)">
                <div className="block lg:hidden">
                  <FacebookShareButton url={url}>
                    <EuiText color="subdued">
                      <RiFacebookCircleFill className="euiIcon euiIcon--large" />
                    </EuiText>
                  </FacebookShareButton>
                </div>
                <div className="hidden lg:block">
                  <EuiToolTip position="right" content="Facebook">
                    <FacebookShareButton url={url}>
                      <EuiText
                        color="subdued"
                        size="s"
                        className="hover:underline"
                      >
                        fb
                      </EuiText>
                    </FacebookShareButton>
                  </EuiToolTip>
                </div>
              </div>
              <div className="mr-12px lg:(block mr-0 pb-20px text-center)">
                <div className="block lg:hidden">
                  <LinkedinShareButton url={url}>
                    <EuiText color="subdued">
                      <RiLinkedinBoxFill className="euiIcon euiIcon--large" />
                    </EuiText>
                  </LinkedinShareButton>
                </div>
                <div className="hidden lg:block">
                  <EuiToolTip position="right" content="Linkedin">
                    <LinkedinShareButton url={url}>
                      <EuiText
                        color="subdued"
                        size="s"
                        className="hover:underline"
                      >
                        li
                      </EuiText>
                    </LinkedinShareButton>
                  </EuiToolTip>
                </div>
              </div>
              <div className="mr-12px lg:(block mr-0 pb-20px text-center)">
                <div className="block lg:hidden">
                  <EuiText
                    color="subdued"
                    onClick={() => {
                      navigator.clipboard.writeText(url);
                    }}
                  >
                    <RiLinksFill className="euiIcon euiIcon--large" />
                  </EuiText>
                </div>
                <div className="hidden lg:block">
                  <EuiToolTip position="right" content="Copy Link">
                    <EuiLink
                      color="subdued"
                      onClick={() => {
                        navigator.clipboard.writeText(url);
                      }}
                    >
                      cp
                    </EuiLink>
                  </EuiToolTip>
                </div>
              </div>
            </div>
            <div className="hidden lg:(block h-80px)" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default BlogPostLeft;
