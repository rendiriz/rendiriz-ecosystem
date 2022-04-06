import { EuiLink } from '@elastic/eui';
import moment from 'moment';
import site from '@/config/site';

function Blog() {
  return (
    <footer className="text-gray-500 mt-32px mb-14px">
      <div className="flex flex-col">
        <div className="text-sm">
          Powered by{' '}
          <EuiLink
            className="!text-gray-500"
            onClick={() =>
              window.open(
                'https://vercel.com/',
                '_blank',
                'noopener noreferrer',
              )
            }
            aria-label="Vercel"
          >
            Vercel
          </EuiLink>
          ,{' '}
          <EuiLink
            className="!text-gray-500"
            onClick={() =>
              window.open(
                'https://www.notion.so/',
                '_blank',
                'noopener noreferrer',
              )
            }
            aria-label="Notion"
          >
            Notion
          </EuiLink>
          , &{' '}
          <EuiLink
            className="!text-gray-500"
            onClick={() =>
              window.open(
                'https://supabase.com/',
                '_blank',
                'noopener noreferrer',
              )
            }
            aria-label="Supabase"
          >
            Supabase
          </EuiLink>
          .
        </div>
        <div className="text-sm mt-2px">
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
    </footer>
  );
}

export default Blog;
