import { useRouter } from 'next/router';

import {
  EuiHeader,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiTextColor,
  useEuiTheme,
} from '@elastic/eui';

import { RiBookmarkLine, RiTwitterLine, RiGithubLine } from 'react-icons/ri';

function Default() {
  const router = useRouter();
  const { euiTheme } = useEuiTheme();

  const renderLogo = () => (
    <EuiHeaderLogo
      iconType="https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg"
      onClick={() => router.push('/')}
      aria-label="Go to home page"
      className="cursor-pointer"
    />
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
                <EuiHeaderLink
                  onClick={() => router.push('/projects')}
                  isActive={router.pathname === '/projects'}
                >
                  Projects
                </EuiHeaderLink>
                <EuiHeaderLink
                  onClick={() => router.push('/blog')}
                  isActive={router.pathname === '/blog'}
                >
                  Blog
                </EuiHeaderLink>
              </EuiHeaderLinks>
            </EuiHeaderSectionItem>

            <EuiHeaderSectionItem>
              <EuiHeaderSectionItemButton
                onClick={() => router.push('/bookmarks')}
              >
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
