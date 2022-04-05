import Link from 'next/link';
import { EuiLink, EuiTitle } from '@elastic/eui';
import moment from 'moment';
import site from '@/config/site';

function Default() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto w-full py-12 px-8 lg:(px-2)">
        <div className="lg:(mx-29)">
          <div className="grid grid-cols-2 gap-4 md:(grid-cols-3)">
            <div>
              <EuiTitle size="xs">
                <h3 className="!text-gray-700">Explore</h3>
              </EuiTitle>
              <ul className="mt-3 space-y-3">
                <li>
                  <Link href="/" passHref>
                    <EuiLink className="!text-gray-500">Home</EuiLink>
                  </Link>
                </li>
                <li>
                  <Link href="/projects" passHref>
                    <EuiLink className="!text-gray-500">Projects</EuiLink>
                  </Link>
                </li>
                <li>
                  <Link href="/blog" passHref>
                    <EuiLink className="!text-gray-500">Blog</EuiLink>
                  </Link>
                </li>
                <li>
                  <Link href="/bookmarks" passHref>
                    <EuiLink className="!text-gray-500">Bookmarks</EuiLink>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <EuiTitle size="xs">
                <h3 className="!text-gray-700">Social</h3>
              </EuiTitle>
              <ul className="mt-3 space-y-3">
                <li>
                  <EuiLink
                    className="!text-gray-500"
                    onClick={() =>
                      window.open(
                        'https://twitter.com/rizkirendi',
                        '_blank',
                        'noopener noreferrer',
                      )
                    }
                    aria-label="Twitter"
                  >
                    Twitter
                  </EuiLink>
                </li>
                <li>
                  <EuiLink
                    className="!text-gray-500"
                    onClick={() =>
                      window.open(
                        'https://www.linkedin.com/in/rendiriz/',
                        '_blank',
                        'noopener noreferrer',
                      )
                    }
                    aria-label="Linkedin"
                  >
                    Linkedin
                  </EuiLink>
                </li>
                <li>
                  <EuiLink
                    className="!text-gray-500"
                    onClick={() =>
                      window.open(
                        'https://github.com/rendiriz',
                        '_blank',
                        'noopener noreferrer',
                      )
                    }
                    aria-label="Github"
                  >
                    Github
                  </EuiLink>
                </li>
              </ul>
            </div>
            <div className="mt-24px md:(mt-0)">
              <EuiTitle size="xs">
                <h3 className="!text-gray-700">Contact</h3>
              </EuiTitle>
              <ul className="mt-3 space-y-3">
                <li>
                  <span className="text-gray-500">hi@rendiriz.com</span>
                </li>
                <li>
                  <span className="text-gray-500">40162 Bandung</span>
                </li>
                <li>
                  <span className="text-gray-500">Indonesia</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-12">
            <EuiLink
              className="!text-gray-500"
              onClick={() =>
                window.open(
                  'https://creativecommons.org/licenses/by-nc-sa/4.0/',
                  '_blank',
                  'noopener noreferrer',
                )
              }
              aria-label="CC BY-NC-SA 4.0"
            >
              CC BY-NC-SA 4.0
            </EuiLink>{' '}
            {moment().format('YYYY')} © {site.title}.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Default;
