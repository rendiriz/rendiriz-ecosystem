import { EuiLink } from '@elastic/eui';
import moment from 'moment';
import site from '@/config/site';

function Default() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto w-full py-12 px-8 lg:(px-2)">
        <div className="text-sm text-gray-700">
          <div className="flex">
            <EuiLink
              className="!text-gray-700"
              onClick={(e) => {
                window.location.href = `mailto:${site.email}`;
                e.preventDefault();
              }}
              aria-label={site.email}
            >
              {site.email}
            </EuiLink>
          </div>
          <div className="flex mt-9px">
            <div>40162 Bandung, Indonesia</div>
          </div>
          <div className="flex flex-col-reverse justify-between mt-6px md:(flex-row)">
            <div className="mt-6px md:(mt-0)">
              <EuiLink
                className="!text-gray-700"
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
            <div className="flex">
              <div>
                <EuiLink
                  className="!text-gray-700"
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
              </div>
              <div className="ml-6px">
                <EuiLink
                  className="!text-gray-700"
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
              </div>
              <div className="ml-6px">
                <EuiLink
                  className="!text-gray-700"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Default;
