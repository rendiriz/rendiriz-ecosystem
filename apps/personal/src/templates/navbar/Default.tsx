import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import {
  EuiHeader,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiLink,
  EuiTextColor,
  useEuiTheme,
} from '@elastic/eui';

import { RiBookmarkLine, RiTwitterLine, RiGithubLine } from 'react-icons/ri';

function Default() {
  const router = useRouter();
  const { euiTheme } = useEuiTheme();

  const renderLogo = () => (
    <Link href="/" passHref>
      <EuiLink
        aria-label="Go to home page"
        className="euiHeaderLogo cursor-pointer"
      >
        <Image src="/rendiriz.svg" height={24} width={24} alt="Remdi Riz" />
      </EuiLink>
    </Link>
  );

  return (
    <EuiHeader position="fixed">
      <div className="container mx-auto">
        <div className="flex justify-between h-full">
          <EuiHeaderSection grow={false}>
            <EuiHeaderSectionItem border="right">
              {renderLogo()}
            </EuiHeaderSectionItem>
          </EuiHeaderSection>

          <EuiHeaderSection side="right">
            <EuiHeaderSectionItem>
              <EuiHeaderLinks aria-label="App navigation links example">
                <Link href="/projects" passHref>
                  <EuiHeaderLink isActive={router.pathname === '/projects'}>
                    Projects
                  </EuiHeaderLink>
                </Link>
                <Link href="/blog" passHref>
                  <EuiHeaderLink isActive={router.pathname === '/blog'}>
                    Blog
                  </EuiHeaderLink>
                </Link>
              </EuiHeaderLinks>
            </EuiHeaderSectionItem>

            <EuiHeaderSectionItem>
              <Link href="/bookmarks" passHref>
                <EuiHeaderSectionItemButton aria-label="Bookmarks">
                  <EuiTextColor
                    color={
                      router.pathname === '/bookmarks'
                        ? euiTheme.colors.link
                        : 'default'
                    }
                  >
                    <RiBookmarkLine className="euiIcon euiIcon--medium" />
                  </EuiTextColor>
                </EuiHeaderSectionItemButton>
              </Link>
            </EuiHeaderSectionItem>

            <EuiHeaderSectionItem>
              <EuiHeaderSectionItemButton
                onClick={() =>
                  window.open(
                    'https://twitter.com/rizkirendi',
                    '_blank',
                    'noopener noreferrer',
                  )
                }
                aria-label="Twitter"
              >
                <RiTwitterLine className="euiIcon euiIcon--medium" />
              </EuiHeaderSectionItemButton>
            </EuiHeaderSectionItem>

            <EuiHeaderSectionItem>
              <EuiHeaderSectionItemButton
                onClick={() =>
                  window.open(
                    'https://github.com/rendiriz',
                    '_blank',
                    'noopener noreferrer',
                  )
                }
                aria-label="Github"
              >
                <RiGithubLine className="euiIcon euiIcon--medium" />
              </EuiHeaderSectionItemButton>
            </EuiHeaderSectionItem>
          </EuiHeaderSection>
        </div>
      </div>
    </EuiHeader>
  );
}

export default Default;
