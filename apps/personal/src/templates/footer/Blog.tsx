import { EuiLink } from '@elastic/eui';
import moment from 'moment';
import site from '@/config/site';

function Blog() {
  return (
    <footer className="mt-32px mb-14px">
      <div className="flex flex-col">
        <div className="text-sm">
          Powered by{' '}
          <EuiLink
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
        <div className="text-sm">
          Copyright © {moment().format('YYYY')} {site.title}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default Blog;
